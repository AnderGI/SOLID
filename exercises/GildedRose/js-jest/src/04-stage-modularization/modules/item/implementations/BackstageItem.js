import {
  decreaseItemSellIn,
  updateBackstageItemQuality,
} from "../../../itemFunctions/itemUtils.js";

import { ItemInterface } from "../ItemInterface.js";

import { Item } from "../Item.js";

export const BackstageItem = (name, sellIn, quality) => {
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
