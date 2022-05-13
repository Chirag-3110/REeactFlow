/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Frame5(props) {
  const { abhiTable, overrides, ...rest } = props;
  return (
    <View
      width="175px"
      height="58px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      key={abhiTable?.Pincode}
      {...rest}
      {...getOverrideProps(overrides, "Frame5")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="111px"
        height="22px"
        position="absolute"
        bottom="7px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={abhiTable?.Pincode}
        {...getOverrideProps(overrides, "pincode")}
      ></Text>
    </View>
  );
}
