package beverage;

final public class Cream implements Supplement, Priceable {

	private Price price;
	
	public Cream(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeSupplementPrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

	@Override
	public void updatePrice(Double value) {
		// TODO Auto-generated method stub
		this.price = new Price(value);
		
	}
}
