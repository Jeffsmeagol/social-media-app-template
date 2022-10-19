import React, { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
// import { Settings } from "@mui/icons-material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          // alignItems="flex-start"
        >
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
