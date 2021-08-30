import React, { useContext, useState } from "react";
import { THEME_TYPE } from "../constants";
import { ThemeContext } from "./../providers/ThemeProvider";
const ThemeSwitcher = () => {

  // const [ theme, setTheme ] = useState('light')
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  // const themeMode = light ?
  //   THEME_TYPE.LIGHT :
  //   THEME_TYPE.DARK;



  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          // checked={!light}
        onChange={toggle}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
