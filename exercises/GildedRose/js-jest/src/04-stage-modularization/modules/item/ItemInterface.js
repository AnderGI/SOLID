export const ItemInterface = (itemObj) => ({
  type: "item",
  manageQuality: () => itemObj.manageQuality(itemObj),
});
