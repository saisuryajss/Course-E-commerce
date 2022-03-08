import { createSelector } from "reselect";

const selectShopItems=state=>state.shop;

export const selectShop=createSelector(
    [selectShopItems],
    items=>items.shopData
);

