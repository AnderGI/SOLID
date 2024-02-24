const BRIE_ITEM = "Aged Brie";
const BACKSTAGE_ITEM = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS_ITEM = "Sulfuras, Hand of Ragnaros";
const MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS = 50;
const MAX_QUALITY_VALUE_FOR_LEGENDARY_ITEMS = 80;
const MIN_QUALITY_VALUE = 0;
const TIMES_TWO_QUALITY_INCREASE_THRESHOLD = 11;
const TIMES_THREE_QUALITY_INCREASE_THRESHOLD = 6;
const QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD = 0;

export const Item = (name, sellIn, quality) => ({
  name,
  sellIn,
  quality,
});

const decreaseItemSellIn = (item) => (item.sellIn -= 1);

const increaseItemQuality = (item) => {
  if (item.quality < MAX_QUALITY_VALUE_FOR_NOT_LEGENDARY_ITEMS)
    item.quality += 1;
};

const resetItemQuality = (item) => (item.quality = 0);

const updateBrieItemQuality = (item) => increaseItemQuality(item);

const updateBackstageItemQuality = (item) => {
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

const updateDefaultItemQuality = (item) => {
  if (item.quality > MIN_QUALITY_VALUE) decreaseItemSellIn(item);

  if (item.sellIn < QUALITY_DEGRADES_TWICE_AS_FAST_PAST_ITEM_SELLIN_THRESHOLD) {
    decreaseItemSellIn(item);
  }
};

// Itme factory function
const ItemInterface = (itemObj) => ({
  type: "item",
  manageQuality: () => itemObj.manageQuality(itemObj),
});

const BrieItem = (name, sellIn, quality) => {
  const protoItem = {
    manageQuality(brieItem) {
      decreaseItemSellIn(brieItem);
      updateBrieItemQuality(brieItem);
    },
  };

  const addInterfaceToItemComposition = ItemInterface(protoItem);
  return Object.assign(
    addInterfaceToItemComposition,
    Item(name, sellIn, quality)
  );
};

const BackstageItem = (name, sellIn, quality) => {
  const protoItem = {
    manageQuality(backstageItem) {
      decreaseItemSellIn(backstageItem);
      updateBackstageItemQuality(backstageItem);
    },
  };

  const addInterfaceToItemComposition = ItemInterface(protoItem);
  return Object.assign(
    addInterfaceToItemComposition,
    Item(name, sellIn, quality)
  );
};

const DefaultItem = (name, sellIn, quality) => {
  const protoItem = {
    manageQuality(defaultItem) {
      decreaseItemSellIn(defaultItem);
      updateDefaultItemQuality(defaultItem);
    },
  };

  const addInterfaceToItemComposition = ItemInterface(protoItem);

  return Object.assign(
    addInterfaceToItemComposition,
    Item(name, sellIn, quality)
  );
};

const updateShopQuality = (itemsArray = []) => {
  const items = itemsArray;
  for (const item of items) {
    // Switch cases usually tend to break OCP
    // What if we want to add a new special item? We have to modify this method 👎
    // We should create an interface for all Items
    // In js we do not have interfaces --> Funciton Composition
    // In case of sulfuras item since there is no functionality we wont create that kind of item
    if (item.type === "item") {
      item.manageQuality(item);
    }
  }

  return items;
};

export const Shop = (items = []) => {
  const basics = {
    items,
    updateShopQuality,
  };

  return basics;
};
