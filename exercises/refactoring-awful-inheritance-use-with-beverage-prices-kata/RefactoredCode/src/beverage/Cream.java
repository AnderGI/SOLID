package beverage;

final public class Cream implements Supplement {

	private Price price;
	
	public Cream(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeSupplementPrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

}
