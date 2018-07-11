class Api::V1::InvitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def find
    params = safe_params

    if params[:password] == ENV["WEDDING_PASSWORD"]
      test_params = [params[:first_name], params[:last_name]].map { |n| n.downcase.capitalize! }

      first_name = test_params[0]
      last_name = test_params[1]

      target_rsvp = Rsvp.find_by first_name: first_name,
                                 last_name: last_name
      if target_rsvp
        target_rsvp.update_attributes!(first_name: test_params[0],
                                       last_name: test_params[1],
                                       email: params["email"])
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
    if Invite.exists?(params["id"].to_i)
      render json: Invite.find(params["id"].to_i), status: 200
    else
      response = {
        error: true,
        message: "No invite found."
      }
      render json: response, status: 200
    end
  end

  private

  def safe_params
    params.require(:invite).permit(:first_name, :last_name, :password, :email)
  end
end
