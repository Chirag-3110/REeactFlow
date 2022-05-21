/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { AbhiTable } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Frame3 from "./Frame3";
import { Collection } from "@aws-amplify/ui-react";
export default function Frame3Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: AbhiTable,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Frame3Collection")}
    >
      {(item, index) => (
        <Frame3
          abhiTable={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Frame3>
      )}
    </Collection>
  );
}
