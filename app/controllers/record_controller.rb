class RecordController < ApplicationController
  respond_to :json
  before_filter :authenticate_user!

  def index 
    respond_with(@datas = Record.all)
  end

  def show
    @data = Record.find(params[:id]).to_json()
    respond_with(@data)
  end

  def update 
    @data = Record.find(params[:id])
    respond_to do |format|
      if @data.update_attributes(params[:secure])
        format.json { head :no_content }
      else
        format.json { render json: @data.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @data = Record.create(params[:secure])
    @data.save
    respond_with(@data)
  end

  def destroy
    @data = Record.find(params[:id])
    @data.destroy
    respond_to do |format|
      format.json  { head :ok }
    end
  end
end
