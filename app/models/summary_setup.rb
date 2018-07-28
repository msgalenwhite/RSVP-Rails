class SummarySetup
  attr_reader :rsvps, :emails

  def initialize
    @rsvps = group_rsvps
    @emails = [ENV['GALEN_EMAIL'], ENV['CHRIS_EMAIL']]
  end

  def group_rsvps
    rsvps = Rsvp.all
    return_hash = {
      accepted: [],
      rejected: [],
      has_not_responded: []
    }

    rsvps.each do |rsvp|
      if rsvp.is_attending
        return_hash[:accepted] << rsvp.full_name
      elsif rsvp.updated_at != rsvp.created_at
        return_hash[:rejected] << rsvp.full_name
      else
        return_hash[:has_not_responded] << rsvp.full_name
      end
    end
    return_hash
  end

  def send_email
    @emails.each do |email|
      SummaryMailer.send_out(email, @rsvps).deliver_now
    end
  end
end
