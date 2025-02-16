import ScreenRoutes from "@/constants/screenRoutes";
import { Redirect } from "expo-router";
import React from "react";
import "../global.css";

const Home = () => {
  return <Redirect href={ScreenRoutes.Onboarding} />;
};

export default Home;
