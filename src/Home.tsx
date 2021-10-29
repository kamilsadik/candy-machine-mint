import "./Home.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import background from "./assets/img/nova1.png"
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

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



const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <main>
      <ThemeProvider theme={darkTheme}>
        <Typography align="center"><img src={background} height="100%" resizeMode="cover" position="relative"/></Typography><br />

        <WhiteTextTypography variant="h3" align="center" position="absolute">
          Nova<br />
          Available Saturday 10/30 @ 10am ET
        </WhiteTextTypography>

{/*
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
              <WhiteTextTypography>Arboretum presents a new model of digital art collection and charitable giving.</WhiteTextTypography><br />

              <WhiteTextTypography>The Arboretum roadmap revolves around two things:</WhiteTextTypography><br />

              <WhiteTextTypography>1) Supporting environmental causes<br />
              2) Delivering value to Arboretum NFT holders</WhiteTextTypography><br />

              <WhiteTextTypography>Our first drop consists of a generative collection of trees encoded on the Solana blockchain. Claim your unique piece of the Arboretum forest, and join Solana's first cryptophilanthropy DAO.</WhiteTextTypography><br />

              <WhiteTextTypography>Minting has now completed, and 25% of all proceeds were donated to Amazon Rainforest Conservation efforts.</WhiteTextTypography><br />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
*/}




        <WhiteTextTypography align="center" variant="body1">{wallet.connected && (
          <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
        )}</WhiteTextTypography>

        <WhiteTextTypography align="center" variant="body1">{wallet.connected && (
          <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
        )}</WhiteTextTypography>

        <Typography align="center" variant="body1">
        <MintContainer>
          {!wallet.connected ? (
            <ConnectButton>Connect Wallet</ConnectButton>
          ) : (
            <MintButton
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
              variant="contained"
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                ) : (
                  "MINT"
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </MintButton>
          )}
        </MintContainer>

        <br />
        
        <WhiteTextTypography align="center" variant="body1">
          Mint Price: 1 SOL
        </WhiteTextTypography>

        </Typography>




{/*
        <br />
        

        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={false} sm={2} />
            

            <Grid item xs={12} sm={10}>

              <WhiteTextTypography>To start, NFT holders will be inducted into the community-driven Arboretum DAO, gaining
              early access to future drops, as well as airdropped generative concept art in the lead-up
              to future projects. While our first project is focused on protecting the Amazon Rainforest, future collections will
              address other environmental causes important to the Arboretum community with thematic, generative artwork.</WhiteTextTypography><br />

            </Grid>

            <Grid item xs={false} sm={2} />
*/}


        <Grid container direction="column">
          <Grid item container>
          <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <WhiteTextTypography variant="h6" align="center">
                MISSION <br /><br />
              </WhiteTextTypography>
              <GreyTextTypography variant="body1" align="center">
                Labyrinth is a digital art collective creating generative artwork on the Solana blockchain.
                We strive to create cutting edge digital art that visually stimulates while also
                inviting introspection and deep reflection.
                <br /><br />
                Core tenets of Labyrinth's mission include: (i)
                building a community in support of the arts on Solana; (ii) achieving a charitable
                objective with each of our collections; and (iii) generating long term value for NFT holders
                through organic growth.
                <br /><br />
                Thematically, much of our material focuses on technology, identity, and abstract representations of data.
                In addition to a host of visual influences, the thematic content of our work is heavily influenced
                by Zen Buddhism, as well as the work of Meshuggah, Gojira, and other technical metal bands.
                <br /><br /><br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>

            <Grid item xs={false} sm={2}/>

            <Grid item xs={12} sm={4} alignItems="stretch">
              <WhiteTextTypography variant="h6" align="center">
                ROADMAP <br /><br />
              </WhiteTextTypography>
              <GreyTextTypography variant="body1" align="center">
                Our genesis collection, Arboretum, consists of 64 minimalist trees in the pixelated style of the very first on-chain NFT art projects, and raised money for <a href="https://amazonwatch.org/" target="_blank">Amazon Watch</a>.
                <br /><br />
                Our second drop, &mut self (Mutable Self) is a meditation on identity, which consists of collage
                and abstract work drawing from masterpieces of self-portraiture, and raised money for <a href="https://maps.org/" target="_blank">MAPS</a>. 
                <br /><br />
                Our third collection, Synesthesia, consists of 1440 abstract collages constructed using the waveform data of popular songs, and raised money for <a href="https://www.notesfornotes.org/" target="_blank">Notes for Notes</a>.
                <br /><br />
                Our fourth and final collection for the foreseeable future is called Nova, and consists of abstract art constructed using four iconic equations in mathematics, parametrized using the coordinates of stars throughout the universe. 25% of proceeds
                will be donated to <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a>.
                <br /><br /><br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>

            <Grid item xs={false} sm={1} />

          </Grid>
        </Grid>


        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
