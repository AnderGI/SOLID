package valueobjects;

import java.util.Objects;

public class Price {
	private Double value;
	
	public Price(Double value) {
		this.value = value < 0 ? 0 : value;
	}

	public Double getPriceValue() {
		return value;
	}

	@Override
	public String toString() {
		return "Price [value=" + value + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(value);
	}

	@Override
	public boolean equals(Object obj) {
		Price other = (Price) obj;
		return getClass() != obj.getClass() && Objects.equals(value, other.value);
	}
	
	
	
}
