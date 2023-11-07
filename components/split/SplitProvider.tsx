"use client";

import { SplitFactory, SplitTreatments } from "@splitsoftware/splitio-react";

const sdkConfig: SplitIO.IBrowserSettings = {
  core: {
    authorizationKey: "",
    key: "key",
  },
};

const featureNames = ["featureName"];

export const SplitProvider = ({ children }) => {
  console.log(1);
  return (
    <SplitFactory config={sdkConfig}>
      <SplitTreatments names={featureNames}>
        {({ treatments, isReady }) => {
          isReady && console.log(treatments);

          return children;
        }}
      </SplitTreatments>
    </SplitFactory>
  );
};
