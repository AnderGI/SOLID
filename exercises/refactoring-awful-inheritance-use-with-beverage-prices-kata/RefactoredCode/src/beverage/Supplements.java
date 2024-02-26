package beverage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

final public class Supplements {
	// Me estoy acoplando a esta lista
	final private List<Supplement> supplements = new ArrayList<>();

	public Supplements(Supplement... supplement) {
		supplements.addAll(Arrays.asList(supplement));
	}
	
	public Double computeAllSupplemetsPrice() {
		try {
				return supplements.stream()
				.map(Supplement::computeSupplementPrice)
				.mapToDouble(Double::doubleValue).sum();	
		}catch(NullPointerException exc) {
			return 0.0;
		}

	}
}
