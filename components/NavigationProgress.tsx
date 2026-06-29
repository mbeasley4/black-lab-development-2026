"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function NavigationProgress() {
  return (
    <AppProgressBar
      height="2px"
      color="#e3f544"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
