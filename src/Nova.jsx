import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

import nova1 from "./assets/img/nova1.png";
import nova38 from "./assets/img/nova38.png";
import nova30 from "./assets/img/nova30.png";
import nova591 from "./assets/img/nova591.png";

import novaAtt10 from "./assets/img/novaAtt10.png";
import novaAtt15 from "./assets/img/novaAtt15.png";


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

const BlueTextTypography = withStyles({
  root: {
    color: "#AED6F1"
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
          nova <br /><br />
        </WhiteTextTypography>

        <Grid container direction="column">
          <Grid item container>

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                Nova is our fourth and final collection for the foreseeable future, with each piece based on a unique star in the universe.
                Each piece is constructed using one or more
                of four iconic equations in mathematics. These equations are then parametrized using the x, y, and z coordinates of the star that the piece represents.
                While the algorithms used are few in number, slight differences in a star's position result in dramatically different outputs.
                <br /><br />
                Each piece in the collection is generated completely algorithmically, with examples shown below. Each star is used only
                once throughout the entire collection. The thickness of the lines in each piece corresponds directly to that star's luminosity.
                <br /><br />
                This collection continues a core artistic theme in the work of Labyrinth Art, which is abstract representation of meaningful underlying data.
                Where the algorithms in prior collections were fed self-portraits or waveforms of music, the algorithms in Nova are fed star dust.
                The metadata for each piece in the collection includes the star's ID in the Hipparcos star catalogue, as well as details about
                the star's position, distance from Earth, luminosity, and more.
                <br /><br />
                25% of all sale proceeds were donated to <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a> in their first ever Solana donation.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10} alignItems="stretch">
              <WhiteTextTypography variant="h4" align="left">
                Examples <br /><br />
              </WhiteTextTypography>
            </Grid>
            <Grid item xs={false} sm={1} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                This piece is generated using the positional data of Star 114,807 in the Hipparcos star catalogue. This star is
                located 916 light years from Earth, and shines with a brightness 33x as great as that of the Sun.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={nova1} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={nova38} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                This piece is constructed using the positional data of Star 112,084 in the Hipparcos star catalogue. This star is
                located 1169 light years from Earth, and is 35x as bright as our Sun.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />


            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                This piece is constructed using the positional data of Star 108,404 in the Hipparcos star catalogue. This star is
                located 1036 light years from Earth, and shines with a luminosity 19x that of our Sun.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={nova30} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={nova591} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                This piece is constructed using the positional data of Star 240 in the Hipparcos star catalogue. This star is
                located 968 light years from Earth, and is just 3.7x as luminous as the Sun, resulting in the finer lines used
                throughout the piece.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />




            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10} alignItems="stretch">
              <WhiteTextTypography variant="h4" align="left">
                <br />Methodology and Rarity <br /><br />
              </WhiteTextTypography>
            </Grid>
            <Grid item xs={false} sm={1} />

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                The algorithms used in the nova collection rely on just four key equations in mathematics:
                the <a href="https://en.wikipedia.org/wiki/Hypotrochoid" target="_blank">hypotrochoid</a>,
                the <a href="https://en.wikipedia.org/wiki/Hypocycloid" target="_blank">hypocycloid</a>,
                the <a href="https://en.wikipedia.org/wiki/Epicycloid" target="_blank">epicycloid</a>, and
                the <a href="https://en.wikipedia.org/wiki/Epitrochoid" target="_blank">epitrochoid</a>.
                Each piece in the collection uses one or more of these equations, and is parametrized using the position
                of the star it represents in the universe. To introduce some element of chaos and randomness into the collection,
                the equations used in each piece are randomly selected from the four equations above.
                <br /><br />
                As is the case with prior collections, rarity is an output rather than an input. That said, this collection
                has a somewhat more well-defined rarity structure, which we desribe in detail below. In general, thinner lines are rarer,
                as are pieces that use all of the four possible equations.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={novaAtt10} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              The biggest and most visible differentiator of rarity is the thickness of the lines used in a given piece. The line thickness
              corresponds directly to the luminosity of the star being represented in the piece. Pieces with a line thickness of 10 are the most common,
              representing over 20% of the collection. Pieces with line thickness of 2-9 are less common, each representing just over 10% of the collection.
              Pieces with a line thickness of 1 are the rarest.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={novaAtt15} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              The other principal driver of rarity is the set of equations from which each piece is constructed. All refers to all four equations. Cycloid, Epi,
              Trochoid, and Hypo each refer to a pair of equations. Hypotrochoid and Epitrochoid each refer to single equations. Only 15% of the pieces in the collection
              use all four equations; 27% of the pieces use a single equation; and 58% of pieces in the collection use two of the four equations.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              With this in mind, the rarity structure is such that pieces with thinner lines, which make use of all four equations, are the rarest in the collection.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />




            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />


          </Grid>
        </Grid>

      </ThemeProvider>
    </main>
  );
};

export default MutableSelf;