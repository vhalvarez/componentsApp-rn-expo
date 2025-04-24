import { View, Text } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import ThemeView from "@/presentation/shared/ThemeView";
import MenuItem from "@/presentation/menu/MenuItem";

const ComponentsApp = () => {
  return (
    <ThemeView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5 "/>

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}

<View className="my-5 "/>

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemeView>
  );
};

export default ComponentsApp;
