/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Test(props) {
  const { item, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="958px"
      height="314px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 89px 0px 89px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Test")}
    >
      <Flex
        gap="38px"
        direction="column"
        height="288px"
        justifyContent="space-between"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="70px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="82.03125px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="868px"
          height="125px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={item?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="58.59375px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="868px"
          height="125px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={item?.password}
          {...getOverrideProps(overrides, "Password")}
        ></Text>
      </Flex>
    </Flex>
  );
}
