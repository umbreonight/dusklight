import React from "react";
import Loadable from "@loadable/component";
import {Loading} from "@components";

export const Home = Loadable(() => import(/* webpackChunkName: "Home" */"./Home"), {
  delay: 250, // in milliseconds
  fallback: <Loading /> // only shown if loading takes more than 250 ms
});

