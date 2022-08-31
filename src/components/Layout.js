import React, { useContext } from "react";
import {ThemeProvider, ThemeContext} from '../contexts/ThemeContext'; 


function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme="light">
            <LayoutNoThemeProvider>
                {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>
    );
}

function LayoutNoThemeProvider({ startingTheme, children }) {
    const { theme } = useContext(ThemeContext);
    // Children down there represents everything between Layout component in the App component
    return (
        <div className={
            theme === "light" ? "container-fluid light"
                : "container-fluid dark"
        }>
            {children}
        </div>
    );
}

export default Layout;