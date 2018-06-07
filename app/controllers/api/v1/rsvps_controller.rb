class Api::V1::RsvpsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    render json: Rsvp.all
  end
end
