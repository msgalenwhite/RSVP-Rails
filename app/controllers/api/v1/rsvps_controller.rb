class Api::V1::RsvpsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def update_all
    new_params = safe_params
    invite = Invite.find(new_params[:invite_id])
    invite.update_attributes!(dietary_restrictions: new_params['dietary_restrictions'])

    update_rsvps(invite, new_params)
    rsvp_info = invite.rsvps

    rsvp_info.each do |person|
      if person.email
        RsvpMailer.send_out(person, invite.dietary_restrictions, rsvp_info).deliver_now
      end
    end

    emails = [ENV['GALEN_EMAIL'], ENV['CHRIS_EMAIL']]

    emails.each do |email|
      SummaryMailer.send_out(email).deliver_now
    end

    render json: invite, status: 200
  end

  private

  def safe_params
    params.permit(:invite_id, :dietary_restrictions, :plusOneName, :rsvps => [:id, :full_name, :is_attending, :role])
  end

  def update_rsvps(invite, new_params)
    new_params['rsvps'].each do |rsvp_info|
      if rsvp_info['role'] == 'is_plus_one'
        first_name = rsvp_info['full_name']
        if new_params['plusOneName'] != ''
          first_name = new_params['plusOneName']
        end
        last_name = '(Plus One)'

        if !rsvp_info['id']
        # this is a plus one attendee that has NOT been put in our database yet

          Rsvp.create!(
            first_name: first_name,
            last_name: last_name,
            is_attending: rsvp_info['is_attending'],
            role: 'is_plus_one',
            invite: invite
          )
        else
          rsvp = Rsvp.find(rsvp_info['id'])
          rsvp.update!(
            is_attending: rsvp_info['is_attending'],
            first_name: first_name,
            last_name: last_name
          )
          invite.update!(plus_one_created: true)
        end
      else
        rsvp = Rsvp.find(rsvp_info['id'])
        rsvp.update!(is_attending: rsvp_info['is_attending'])
      end
    end

    new_params['rsvps']
  end
end
