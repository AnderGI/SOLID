package beverage;

final public class Coffe implements Beverage {
	private Price price;
	
	public Coffe(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeBeveragePrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

}

