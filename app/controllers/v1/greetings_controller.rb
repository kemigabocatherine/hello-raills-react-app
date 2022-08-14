module V1
  class GreetingsController < ApplicationController
    def index
      render json: { greeting: Greeting.all.sample.message }.to_json
    end
  end
end
