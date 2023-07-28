class ApplicationController < ActionController::API
# GET /about
  def about
    render json: { data: "Store..."}
  end
end
