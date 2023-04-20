import { CssBaseline, ThemeProvider, Box, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { tokens } from "./theme";

import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";

function App() {
  const [theme, colorMode] = useMode();
  const topic = useTheme();
  const colors = tokens(topic.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <SideBar />
          <Box
            sx={
              theme.palette.mode === "dark"
                ? { background: colors.primary[500] }
                : { background: colors.primary[900] }
            }
            className="content"
          >
            <TopBar />
            <Routes>
              <Route path={"/"} element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />

              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
