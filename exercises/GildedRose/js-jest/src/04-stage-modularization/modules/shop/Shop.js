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
