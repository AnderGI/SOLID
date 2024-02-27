package beverage;

final public class Tea implements Beverage {
	private Price price;
	
	public Tea(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeBeveragePrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

}
