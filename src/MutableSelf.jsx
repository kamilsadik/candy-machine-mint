import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import cascade from "./assets/img/cascade.png"
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

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

const GreyTextTypography = withStyles({
  root: {
    color: "#E0E0E0"
  }
})(Typography);

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}



const MutableSelf = () => {
  return (
    <main>
      <ThemeProvider theme={darkTheme}>

        <WhiteTextTypography variant="h2" align="center">
          &mut self (Mutable Self) <br /><br />
        </WhiteTextTypography>

        <Grid item xs={false} sm={2} />

        <GreyTextTypography variant="body1" align="center">
          Mutable Self is a meditation on the illusion of self. The collection consists of 548 generative variations
          on masterpieces of self portraiture. The collection consists of 12 variations each on 48 masterpieces. The variations
          grow increasingly chaotic, building upon each artist's notion of self, and compelling the viewer to consider
          their own place in the world, and their own concept of self. Variations range from slight distortions to the
          source material, to extremely abstract deconstructions of the self. The collection is heavily inspired by
          Zen, and by the work of philosophical technical metal bands Meshuggah and Gojira.
          <br /><br />
          
          <br /><br />
        </GreyTextTypography>

        <Typography align="center"><img src={cascade} height="100%" resizeMode="cover" position="relative"/></Typography><br />

      </ThemeProvider>
    </main>
  );
};

export default MutableSelf;