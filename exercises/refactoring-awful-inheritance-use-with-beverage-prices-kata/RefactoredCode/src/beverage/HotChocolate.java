package beverage;

final public class HotChocolate implements Beverage, Priceable {
	private Price price;
	
	public HotChocolate(Double value) {
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
