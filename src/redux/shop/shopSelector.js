import { createSelector } from "reselect";

const selectShopItems = state => state.shop;

export const selectCollections = createSelector(
    [selectShopItems],
    items => items.shopData
);

export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
);

export const selectCollection = (collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
}

