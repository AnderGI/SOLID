import {
  decreaseItemSellIn,
  updateBrieItemQuality,
} from "../../../itemFunctions/itemUtils.js";

import { ItemInterface } from "../ItemInterface.js";

import { Item } from "../Item.js";

export const BrieItem = (name, sellIn, quality) => {
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
