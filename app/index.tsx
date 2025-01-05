import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Href } from "expo-router";
import "../global.css";

const Home = () => {
  return <Redirect href={"/(auth)/onboarding" as Href} />;
};

export default Home;

const styles = StyleSheet.create({});
