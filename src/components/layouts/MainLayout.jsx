import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

import { theme } from "../ui/Theme";

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Mohammadreza Moradi</title>
        </Helmet>
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
