class Api::V1::RsvpsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def update_all
    new_params = safe_params
    invite = invite.find(new_params[:invite_id].to_i)
    update_invite(invite, new_params)

    render json: invite, status: 200
  end

  private

  def safe_params
    params.permit(:invite_id, :dietary_restrictions, :plusOneName, :rsvps => [:id, :full_name, :is_attending])
  end

  def update_invite(invite, new_params)
    invite.update!(dietary_restrictions: new_params['dietary_restrictions'])

    # rsvps = invite.rsvps
    # rsvps.each do |person_info|
    #   if invite.plus_one && person_info.full_name == 'plusOne'
    #     rsvp.create!(
    #       first_name: new_params['plusOneName'] != 'Plus One'
    #       is_attending: new_params['is_attending']
    #       invite: invite
    #     )
    #   else
    #     rsvp.update!(
    #       is_attending: info['is_attending'],
    #     )
    #   end
    # end
  end
end
