class Api::V1::InvitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def find
    params = safe_params
    if params[:password] == ENV["WEDDING_PASSWORD"]
      # look for RSVP with that combination of first and last name (maybe add an index to make this search faster?)
      # find the invitation associated with that RSVP
      # return an invitation object for all people associated on that invite
    else
      flash[:wrong_password] = "Your password is not correct."
      render json: params, status: 400
    end
  end

  private

  def safe_params
    params.require(:invite).permit(:first_name, :last_name, :password)
  end
end
