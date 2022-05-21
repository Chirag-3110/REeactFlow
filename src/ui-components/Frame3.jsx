/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Frame3(props) {
  const { abhiTable, overrides, ...rest } = props;
  return (
    <View
      width="828px"
      height="203px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame3")}
    >
      <View
        width="356px"
        height="65px"
        position="absolute"
        top="calc(50% - 32.5px - 6px)"
        left="calc(50% - 178px - -51px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="34px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="39.84375px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="-0.53px"
          width="356px"
          height="65px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={abhiTable?.address}
          {...getOverrideProps(overrides, "address")}
        ></Text>
      </View>
    </View>
  );
}
