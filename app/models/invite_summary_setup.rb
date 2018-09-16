class InviteSummarySetup
  attr_reader :rsvps, :emails

  def initialize
    @responses = group_rsvps
  end

  def group_rsvps
    invitations = Invite.all
    responses = []
    separating_line = "\n\n#{'~' * 12}\n\n"
    tab = "  -"

    invitations.each do |invite|
      responses << separating_line
      if invite.dietary_restrictions && invite.dietary_restrictions != ""
        responses << "Dietary Restrictions: #{invite.dietary_restrictions}"
      end

      rsvps = invite.rsvps
      rsvps.each do |rsvp|
        response_line = "#{tab} #{rsvp.full_name}"

        if rsvp.is_attending
          responses << "#{response_line} (attending)"
        elsif rsvp.updated_at != rsvp.created_at
          responses << "#{response_line} (NOT attending)"
        else
          responses << "#{response_line} (has not responded)"
        end
      end
    end
    responses
  end

  def email_bride
    InviteSummaryMailer.send_out(@responses).deliver_now
  end
end
