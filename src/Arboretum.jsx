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

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const styles = {
  paperContainer: {
    backgroundImage: './assets/img/background.png',
  },
}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
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
        <WhiteTextTypography>
          ARBORETUM
        </WhiteTextTypography>
      </ThemeProvider>
    </main>
  );
};

export default Arboretum;