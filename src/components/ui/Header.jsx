import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { cloneElement } from "react";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });

  return (
    <>
      {/* <ElevationScroll>
        <AppBar
          className="appBar"
          sx={{
            background: trigger
              ? "linear-gradient(to right, #17D396, #07F7F7)"
              : "transparent",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to elevate App ber
            </Typography>
            <Button color="error"> click here</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll> */}
    </>
  );
};

export default Header;
