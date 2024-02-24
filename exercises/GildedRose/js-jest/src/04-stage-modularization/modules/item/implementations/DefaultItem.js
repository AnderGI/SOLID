import {
  decreaseItemSellIn,
  updateDefaultItemQuality,
} from "../../../itemFunctions/itemUtils.js";

import { ItemInterface } from "../ItemInterface.js";

import { Item } from "../Item.js";

export const DefaultItem = (name, sellIn, quality) => {
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
