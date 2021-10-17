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

import image618 from "./assets/img/image618.png";
import image1215 from "./assets/img/image1215.png";
import image1281 from "./assets/img/image1281.png";
import image1355 from "./assets/img/image1355.png";

import synesthesiaAtt1 from "./assets/img/synesthesiaAtt1.png";
import synesthesiaAtt0 from "./assets/img/synesthesiaAtt0.png";
import mutSelfAtt3 from "./assets/img/mutSelfAtt3.png";
import mutSelfAtt4 from "./assets/img/mutSelfAtt4.png";
import mutSelfAtt8 from "./assets/img/mutSelfAtt8.png";


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
          synesthesia <br /><br />
        </WhiteTextTypography>

        <Grid container direction="column">
          <Grid item container>

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                Synesthesia is our most recent collection of 1440 pieces of abstract generative art, constructed using the waveform data of songs.
                The methodology behind this collection involves analyzing the waveform of each song, and extracting summary statistics
                which are then used as parameters in the artwork. The range of colors in each piece reflect the range of amplitudes
                throughout the song, while the density and size of each colored shape reflect the song's overall intensity.
                <br /><br />
                The collection draws from waveforms of 30 songs by artists including Amy Winehouse, Kanye West, Meshuggah, Taylor Swift, and many others.
                Each song is used to construct 48 unique variations, all originating from the song's waveform, and representing the range of
                visual effects extractable from a single song.
                Each piece in the collection is generated completely algorithmically, with examples shown below.
                <br /><br />
                Thematically, the collection builds upon &mut self (Mutable Self), continuing the themes of deconstruction and examination of the whole by considering its constituent parts in various forms.
                The generative algorithms used in this collection draw inspiration from cryptography, particularly drawing from the idea of private and public keys.
                In essence, the waveform of a song functions as a private key, from which 48 unique public keys are generated in the form of abstract art.
                <br /><br />
                Minting took place on Saturday, October 16 @ 11am ET at a price of 1 SOL per mint, and all pieces sold out that day. 25% of all sale proceeds went to <a href="https://www.notesfornotes.org/" target="_blank">Notes for Notes</a>, an organization
                that provides students with free access to musical instruments and lessons.
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
                This piece is generated using waveform data from Rehab by Amy Winehouse. The piece uses a higher scaling factor for the shapes
                on the canvas, resulting in a greater amount of negative space. The color palette here spans the rainbow, with the color of each
                dot representing the amplitude of a particular point in the song's waveform. The density in this piece is moderate.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={image618} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={image1215} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                Visually chaotic, it comes as no surprise that this piece is constructed using the waveform data of Bleed by Meshuggah.
                The color palette ranges from indigo for the most negative amplitudes, and crimson for the most positive amplitudes. The
                abundance of more moderate tones, combined with the densely packed arrangement of dots, underscores the consistent and
                relentless intensity of what is perhaps Meshuggah's best-known song.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />


            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                This piece is derived from the waveform of Made in America by Kanye West and Jay-Z. The color palette uses indigo for the most negative amplitudes, and amber for the most positive. The
                dense concentration of the deepest shades of this spectrum is illustrative of the fullness of the sound throughout the track,
                anchored by the pounding bassline, which is given pride of place in the track's mastering.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={image1281} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={image1355} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                The source material for this piece is Bad Guy by Billie Eilish. The staccato refrain is illustrated with a mix of both square
                and circular dots on the canvas. The density of the image reflects the song's pace which is, at times, frenetic. The color
                palette ranges from blue to pink.
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />




            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10} alignItems="stretch">
              <WhiteTextTypography variant="h4" align="left">
                <br />Rarity <br /><br />
              </WhiteTextTypography>
            </Grid>
            <Grid item xs={false} sm={1} />

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                The Synesthesia collection utilizes 48 unique algorithms, each of which is applied to the 30 songs used as source material for the collection
                to generate a total of 1440 pieces. The various algorithms create different visual outputs from a single song's waveform by using different
                scaling factors for dot size, different shapes to represent different waveforms, and a variety of color palettes across pieces in the collection
                to express the range of amplitudes in a given song in a variety of ways.
                <br /><br />
                As is the case with prior collections, rarity is an output rather than an input. We share the range of parameters that go into each algorithm,
                but the true rarity of each piece is a function of the aesthetic appeal that it has for the individual holder.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={synesthesiaAtt1} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              The number of pieces in the collection derived from a given artist's work varies, though not significantly. Kanye West, Jay-Z, 2Pac,
              Meshuggah, and Gojira all have multiple songs serving as source material for the collection, while the remaining artists each have a single
              song used as source material in the collection.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={synesthesiaAtt0} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              The quantity of NFTs derived from any particular song is constant at 48, each of which uses a unique generative algorithm.
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
              The remaining attributes are equally common throughout the collection, and are described below:
              <br /><br />
              Dot Scaling Factor refers to the scaling applied to
              shapes used in each collage. Half of the pieces in the collection use a Dot Scaling Factor of 100 resulting in larger shapes, while the other half use a Dot Scaling
              Factor of 200 resulting in smaller shapes.
              <br /><br />
              Palette refers to the color scheme used to represent the range of amplitudes in a given song's waveform. The four palettes used in this collection are Indigo/Red,
              Blue/Pink, Indigo/Amber, and Gradient. All palettes are equally represented throughout the colleciton.
              <br /><br />
              Shape refers to the shapes used in each collage. The collection consists of equal quantities of pieces using Circles only, Squares only, and mix of both.
              <br /><br />
              Density refers to how tightly packed the shapes in the collage are on the canvas (though the waveform itself is the biggest driver of how dense/sparse a piece is).
              The collection is split evenly between pieces with a Density score of 5000, and a Density score of 7500.
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