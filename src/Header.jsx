import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from "@material-ui/styles";
// These imports are needed for the Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

// Icons
import TwitterIcon from "./assets/img/twitter.png";
import DiscordIcon from "./assets/img/discord.png"



const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const Header = () => {

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="relative" color="transparent">
          <Toolbar>

            <Typography>
              <Button size="small" href="https://twitter.com/ArboretumNFT" target="_blank">
                <img src={TwitterIcon} height = "18px" />
              </Button>
              <Button size="small" href="https://discord.gg/4Qx4Vnh3Sr" target="_blank">
                <img src={DiscordIcon} height = "24px" />
              </Button>
            </Typography>

            <div>
                <Button variant="text" href="/" style={{textTransform: 'none'}}>
                  <WhiteTextTypography>
                    home
                  </WhiteTextTypography>
                </Button>
            </div>

            <div>
                <Button variant="text" href="/#/mutable-self" style={{textTransform: 'none'}}>
                  <WhiteTextTypography>
                    &mut self
                  </WhiteTextTypography>
                </Button>
            </div>

            <div>
                <Button variant="text" href="/#/arboretum" style={{textTransform: 'none'}}>
                  <WhiteTextTypography>
                    arboretum
                  </WhiteTextTypography>
                </Button>
            </div>

           </Toolbar>
        </AppBar>
    </ThemeProvider>


  );
};

export default Header;
