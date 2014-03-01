class Api::V1::RecordController < Api::V1::BaseController
  before_filter :authenticate_user!

  def index 
    respond_with(Record.all)
  end

  def show
    @data = Record.find(params[:id]).to_json()
    respond_with(@data)
  end

  def update 
    @data = Record.find(params[:id])
    respond_to do |format|
      if @data.update_attributes(record_params)
        format.json { head :no_content }
      else
        format.json { render json: @data.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @data = Record.create(record_params)
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

  private

  def record_params
    params.require(:record).permit(:secure)
  end
end
