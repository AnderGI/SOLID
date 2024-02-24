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
const MIN_QUALITY_VALUE = 0;
const TIMES_TWO_QUALITY_INCREASE_THRESHOLD = 11;
const TIMES_THREE_QUALITY_INCREASE_THRESHOLD = 6;

export class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      if (item.name != BRIE_ITEM && item.name != BACKSTAGE_ITEM) {
        if (item.quality > MIN_QUALITY_VALUE) {
          if (item.name != SULFURAS_ITEM) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS) {
          item.quality = item.quality + 1;
          if (item.name == BACKSTAGE_ITEM) {
            if (item.sellIn < TIMES_TWO_QUALITY_INCREASE_DEADLINE) {
              if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < TIMES_THREE_QUALITY_INCREASE_DEADLINE) {
              if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != SULFURAS_ITEM) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < MIN_QUALITY_VALUE) {
        if (item.name != BRIE_ITEM) {
          if (item.name != BACKSTAGE_ITEM) {
            if (item.quality > MIN_QUALITY_VALUE) {
              if (item.name != SULFURAS_ITEM) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
