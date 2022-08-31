import React, {createContext, useState} from "react";
export const ThemeContext = createContext();
function Layout({startingTheme, children}){
    const [theme, setTheme] = useState(startingTheme);
    // Children down there represents everything between Layout component in the App component
    return(
        <ThemeContext.Provider value={
            {setTheme, theme,}
        }>
            <div className={
                theme === "light" ? "container-fluid light"
                    : "container-fluid dark"
            }>
                {children} 
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout;