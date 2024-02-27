package beverage;

public class Price {
	private Double value;
	
	public Price(Double value) {
		this.value = value < 0 ? 0 : value;
	}

	public Double getPriceValue() {
		return value;
	}
	
}
