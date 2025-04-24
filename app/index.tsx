import { View, Text } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { animationMenuRoutes } from "@/constants/Routes";
import ThemeView from "@/presentation/shared/ThemeView";

const ComponentsApp = () => {
  return (
    <ThemeView margin>
      {animationMenuRoutes.map((route, index) => (
        <Link href={route.name.split("/")[0] as Href}>{route.title}</Link>
      ))}
    </ThemeView>
  );
};

export default ComponentsApp;
