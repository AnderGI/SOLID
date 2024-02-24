const BRIE_ITEM = "Aged Brie";
const BACKSTAGE_ITEM = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS_ITEM = "Sulfuras, Hand of Ragnaros";
const MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS = 50;
const MAX_QUALITY_VALUE_FOR_LEGENDARY_ITEMS = 80;
const MIN_QUALITY_VALUE = 0;
const TIMES_TWO_QUALITY_INCREASE_THRESHOLD = 11;
const TIMES_THREE_QUALITY_INCREASE_THRESHOLD = 6;
const QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD = 0;

export const decreaseItemSellIn = (item) => (item.sellIn -= 1);

export const increaseItemQuality = (item) => {
  if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS)
    item.quality += 1;
};

export const resetItemQuality = (item) => (item.quality = 0);

export const updateBrieItemQuality = (item) => increaseItemQuality(item);

export const updateBackstageItemQuality = (item) => {
  increaseItemQuality(item);

  if (item.sellIn < TIMES_TWO_QUALITY_INCREASE_THRESHOLD) {
    increaseItemQuality(item);
  }

  if (item.sellIn < TIMES_THREE_QUALITY_INCREASE_THRESHOLD) {
    increaseItemQuality(item);
  }

  if (item.sellIn <= 0) {
    resetItemQuality(item);
  }
};

export const updateDefaultItemQuality = (item) => {
  if (item.quality > MIN_QUALITY_VALUE) decreaseItemSellIn(item);

  if (item.sellIn < QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD) {
    decreaseItemSellIn(item);
  }
};
