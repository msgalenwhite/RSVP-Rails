class Api::V1::InvitesController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def find
    params = safe_params
    if params[:password] == ENV["WEDDING_PASSWORD"]
      test_params = [params[:first_name], params[:last_name]].map { |n| n.downcase.capitalize! }
      target_rsvp = Rsvp.find_by_first_name_and_last_name(test_params[0], test_params[1])
      if target_rsvp
        target_rsvp.update!(user: current_user)
        render json: target_rsvp, status: 200
      else
        params[:error] = true
        params[:message] = "The first and last name you provided did not match the invitation list.  If you believe this is in error, please contact Galen at #{ENV["GALEN_EMAIL"]}.  Otherwise, try again."

        render json: params, status: 200
      end
    else
      params[:error] = true
      params[:message] = "Your password was incorrect."
      render json: params, status: 200
    end
  end

  def show
    invite = Invite.find(params["id"].to_i)
    if invite
      render json: invite, status: 200
    else
      response = {
        error: true,
        message: "No invite found."
      }
      render json: response, status: 200
    end
  end

  def update
    new_params = safe_rsvp_params
    new_params['rsvps'].each do |person_info|
      update_rsvp(person_info)
    end
  end

  private

  def safe_params
    params.require(:invite).permit(:first_name, :last_name, :password)
  end

  def safe_rsvp_params
    params.permit(:id, :rsvps => [:id, :full_name, :is_attending, :plus_one, :baby, :dietary_restrictions])
  end

  def update_rsvp(info)
    rsvp = Rsvp.find(info['id'].to_i)
    rsvp.update!(
      is_attending = info['is_attending'],
      dietary_restrictions = info['dietary_restrictions'],
      plus_one = info['plus_one'],
      baby = info['baby']
    )
  end
end
