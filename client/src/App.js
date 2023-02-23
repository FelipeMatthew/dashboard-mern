import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "./config/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "scenes/dashboard";

export default function App() {
  // Vai pegar o redux do estado
  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

// Setting up MATERIAL UI MUI = use the light and the dark mode

// vai usar em todas as telas o layout
// Element = Always pages will have this element called layout.
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" repĺace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

