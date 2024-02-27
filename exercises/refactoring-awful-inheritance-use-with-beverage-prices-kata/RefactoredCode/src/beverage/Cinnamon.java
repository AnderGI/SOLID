package beverage;

final public class Cinnamon implements Supplement {

	private Price price;
	
	public Cinnamon(Double value) {
		this.price = new Price(value);
	}
	
	@Override
	public Double computeSupplementPrice() {
		// TODO Auto-generated method stub
		return this.price.getPriceValue();
	}

}
