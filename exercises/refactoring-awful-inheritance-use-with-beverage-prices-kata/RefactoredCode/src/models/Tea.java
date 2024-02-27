package models;

import interfaces.Beverage;
import interfaces.Priceable;
import valueobjects.Price;

final public class Tea implements Beverage, Priceable{
	private Price price;
	
	public Tea(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeBeveragePrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}
	
	@Override
	public void updatePrice(Double value) {
		// TODO Auto-generated method stub
		this.price = new Price(value);
		
	}

}
