class Api::V1::InvitesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def find
    params = safe_params
    # check password
    # if YES:
      # look for RSVP with that combination of first and last name (maybe add an index to make this search faster?)
      # find the invitation associated with that RSVP
      # return an invitation object for all people associated on that invite

    # if NO:
      # set flash message (and make sure flash messages are set up) then send back an error
  end

  private

  def safe_params
    params.require(:invite).permit(:first_name, :last_name, :password)
  end
end
