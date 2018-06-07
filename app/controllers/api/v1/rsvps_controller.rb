class Api::V1::RsvpsController < ApplicationController
  protect_from_forgery unles: -> { request.format.json? }
  def index
    render json: RSVP.all
  end
end
