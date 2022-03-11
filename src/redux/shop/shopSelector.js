import { createSelector } from "reselect";

const selectShopItems=state=>state.shop;

const COLLECTION_ID_MAP={
    hats:1,
    sneaker:2, 
    jackets:3,
    women:4,
    men:5
}

export const selectCollections=createSelector(
    [selectShopItems],
    items=>items.shopData
);


export const selectCollection=(collectionUrlParam)=>{
    console.log(collectionUrlParam);
  return  createSelector(
    [selectCollections],
    collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
);
}
   