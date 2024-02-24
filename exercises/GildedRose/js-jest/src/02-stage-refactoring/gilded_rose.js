export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const BRIE_ITEM = "Aged Brie";
const BACKSTAGE_ITEM = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS_ITEM = "Sulfuras, Hand of Ragnaros";
const MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS = 50;
const MAX_QUALITY_VALUE_FOR_LEGENDARY_ITEMS = 80;
const MIN_QUALITY_VALUE = 0;
const TIMES_TWO_QUALITY_INCREASE_THRESHOLD = 11;
const TIMES_THREE_QUALITY_INCREASE_THRESHOLD = 6;
const QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD = 0;

// DEFAULT ITEMS
// All items have a SellIn value which denotes the number of days we have to sell the item
// All items have a Quality value which denotes how valuable the item is
// At the end of each day our system lowers both values for every item
// Once the sell by date has passed, Quality degrades twice as fast

// The Quality of an item is never negative
// The Quality of an item is never more than 50

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  decreaseItemSellIn(item) {
    item.sellIn -= 1;
  }

  increaseItemQuality(item) {
    item.quality += 1;
  }

  resetItemQuality(item) {
    item.quality = 0;
  }

  updateBrieItemQuality(item) {
    this.increaseItemQuality(item);
  }

  updateBacksatageItemQuality(item) {
    // “Backstage passes”, like aged brie, increases in Quality as its SellIn value approaches;
    this.increaseItemQuality(item);

    // Quality increases by 2 when there are 10 days or less
    if (item.sellIn < TIMES_TWO_QUALITY_INCREASE_THRESHOLD) {
      this.increaseItemQuality(item);
    }

    // and by 3 when there are 5 days or less but
    if (item.sellIn < TIMES_THREE_QUALITY_INCREASE_THRESHOLD) {
      this.increaseItemQuality(item);
    }

    // Quality drops to 0 after the concert
    if (item.sellIn <= 0) {
      this.resetItemQuality(item);
    }
  }

  updateDefaultItemQuality(item) {
    this.decreaseItemSellIn(item);

    if (
      item.sellIn < QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD
    ) {
      this.decreaseItemSellIn(item);
    }
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case BRIE_ITEM:
          // At the end of each day our system lowers both values for every item
          this.decreaseItemSellIn(item);
          // “Aged Brie” actually increases in Quality the older it gets
          this.updateBrieItemQuality(item);
          break;
        case BACKSTAGE_ITEM:
          // At the end of each day our system lowers both values for every item
          this.decreaseItemSellIn(item);
          this.updateBacksatageItemQuality(item);
          break;
        case SULFURAS_ITEM:
          // “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
          break;
        default:
          // At the end of each day our system lowers both values for every item
          this.decreaseItemSellIn(item);
          this.updateDefaultItemQuality(item);
          break;
      }
    }

    return this.items;
  }
}
