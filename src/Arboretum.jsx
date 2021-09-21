import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import background from "./assets/img/background.png"
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

import arboretum from "./assets/img/arboretum.png";

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

const Arboretum = () => {
  return (
    <main>
      <ThemeProvider theme={darkTheme}>

        <WhiteTextTypography variant="h2" align="center">
          Arboretum <br /><br />
        </WhiteTextTypography>

        <Grid container direction="column">
          <Grid item container>

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                Arboretum is the genesis collection of the Labyrinth art collective, and consists of 64 generative trees on the Solana blockchain.
                With its simplicity, the collection pays homage to the earliest on-chain pixelated artwork.
                <br /><br />
                25% of sales proceeds associated with the mint went to <a href="https://amazonwatch.org/" target="_blank">Amazon Watch</a> to aid in their efforts to protect the Amazon Rainforest,
                while empowering indigenous populations.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={arboretum} height="1000px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>



          </Grid>
        </Grid>

      </ThemeProvider>
    </main>
  );
};

export default Arboretum;