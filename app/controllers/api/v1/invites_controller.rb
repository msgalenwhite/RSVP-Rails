class Api::V1::InvitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def find
    params = safe_params
    if params[:password] == ENV["WEDDING_PASSWORD"]
      target_rsvp = Rsvp.find_by_first_name_and_last_name(params[:first_name], params[:last_name])

      render json: target_rsvp, status: 200
    else
      params[:error] = true
      params[:message] = "Your password was incorrect."
      render json: params, status: 200
    end
  end

  private

  def safe_params
    params.require(:invite).permit(:first_name, :last_name, :password)
  end
end
