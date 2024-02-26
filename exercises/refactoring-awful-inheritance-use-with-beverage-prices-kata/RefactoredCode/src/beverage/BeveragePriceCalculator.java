package beverage;

final public class BeveragePriceCalculator {
	private final Beverage base;
	// Acoplamiento?
	private final Supplements supplememts; 
	public BeveragePriceCalculator(Beverage beverage, Supplements sup) {
		this.base = beverage;
		this.supplememts = sup;
	}
	
	public Double computeCompleteBeveragePrice() {
		return base.computeBeveragePrice() + supplememts.computeAllSupplemetsPrice();
	}
}
