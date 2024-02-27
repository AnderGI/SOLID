package beverage;

final public class HotChocolate implements Beverage {
	private Price price;
	
	public HotChocolate(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeBeveragePrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

}
