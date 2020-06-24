class CardsController < ApplicationController
  def pay
    Payjp.api_key = ENV['PAYJP_SECRET_KEY']
    charge = Payjp::Charge.create(
      amount: 300,
      card: params['payjp-token'],
      currency: 'jpy'
      )
      redirect_to action: :done
  end
end