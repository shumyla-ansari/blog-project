import React from "react";

export const ThemeContext = React.createContext({
  primaryColor: "deepskyblue",
  secondaryColor: "purple",
});

export const StateContext = React.createContext({
  state: {},
  dispatch: () => {}
})
