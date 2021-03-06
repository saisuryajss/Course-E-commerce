import { createSelector } from "reselect";

const selectDirectory=state=>state.directory;

export const selectDirectoryData=createSelector(
  [selectDirectory]  ,
  directory=>directory.sections
);