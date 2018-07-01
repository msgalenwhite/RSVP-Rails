class Api::V1::RsvpsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def update_all
    new_params = safe_params
    invite = Invite.find(new_params[:invite_id])
    update_invite(invite, new_params)

    RsvpMailer.send_out(current_user).deliver_now

    render json: invite, status: 200
  end

  private

  def safe_params
    params.permit(:invite_id, :dietary_restrictions, :plusOneName, :rsvps => [:id, :full_name, :is_attending])
  end

  def update_invite(invite, new_params)
    invite.update_attributes!(dietary_restrictions: new_params['dietary_restrictions'])

    if invite.plus_one && new_params['rsvps'].length == 2 && new_params['rsvps'].last['is_attending']
      invite.update_attributes!(plus_one: false)

      if new_params['plusOneName'] == ""
        first_name: 'Plus'
        last_name: 'One'
      else
        first_name: new_params['plusOneName']
        last_name: "(Plus One)"
      end

      Rsvp.create!(
        first_name: first_name,
        last_name: last_name,
        is_attending: new_params['rsvps'].last['is_attending'],
        role: 'is_plus_one',
        invite: invite
      )
      update_rsvp(new_params['rsvps'].first)
    else
      new_params['rsvps'].each do |rsvp_info|
        update_rsvp(rsvp_info)
      end
    end
  end

  def update_rsvp(info)
    target_rsvp = Rsvp.find(info['id'])
    target_rsvp.update_attributes!(is_attending: info['is_attending'])
  end
end
