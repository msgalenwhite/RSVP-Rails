class Api::V1::StoriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    current_page = page_params["page_num"].to_i - 1
    stories_per_page = 5
    stories = Story.newest_first.offset(current_page * stories_per_page).limit(stories_per_page)
    render json: { stories: stories, numStories: Story.count }, status: 200
  end

  def new
    new_params = safe_params
    new_params["stories"].each do |story|
      Story.create!(body: story, submitter: new_params["submitter"])
    end

    returnHash = {
      email: new_params["email"],
      name: new_params["submitter"],
      numStories: new_params["stories"].count
    }

    render json: returnHash, status: 200
  end

  private
  def safe_params
    params.permit(:submitter, :stories => [])
  end

  def page_params
    params.permit(:page_num)
  end
end
