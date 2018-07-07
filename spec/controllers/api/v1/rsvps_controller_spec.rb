# require "rails_helper"
#
# describe Api::V1::RsvpsController, :type => :controller do
#   describe 'PATCH#update_all' do
#     context 'plus one allowed' do
#
#     end
#     params = allow(controller).to receive(:params).and_return(
#       ActionController::Parameters.new(
#         rsvps:  [{
#           full_name: "Sam (Plus One)",
#           id: 91,
#           invite_id: 1,
#           is_attending: false,
#           role: "is_plus_one"},
#           {
#             full_name: "Leah White",
#             id: 1,
#             invite_id: 1,
#             is_attending: false,
#             role: "has_plus_one"
#           }],
#           dietary_restrictions: "None.",
#           plusOneName: "",
#           controller: "api/v1/rsvps",
#           action: "update_all",
#           invite_id: "1",
#           format: "json",
#           rsvp: {}
#       )
#     )
#
#
#     patch :update_all
#     returned_json = JSON.parse(response.body)
#
#     binding.pry
#   end
# end
