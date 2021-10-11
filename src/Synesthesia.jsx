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

import mutSelfAtt1 from "./assets/img/mutSelfAtt1.png";
import mutSelfAtt2 from "./assets/img/mutSelfAtt2.png";
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
                Synesthesia is an upcoming collection of 1440 pieces of abstract generative art, constructed using the waveform data of songs.
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
                <br /><br />
                Minting will take place on Saturday, October 16 @ 11am ET. 25% of all sale proceeds will go to a charity selected by the Labyrinth community prior to the mint.
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


{/*

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
                The &mut self collection consists of just one of each variation type for each of the 48 self portraits used as source material.
                Some of these portraits are by the same artist, while other artists only have a single portrait used as source material in the collection.
                <br /><br />
                Some portraits have only eight instead of the full twelve variations. This is the case for 7 of the portraits, whose creators are still
                living or passed away less than 70 years ago. In those cases, we only use that portrait for the most heavily abstracted
                variations, consistent with fair-use of source material in collage-based artwork.
                <br /><br />
                In discussing rarity, we often refer to tiles, which are the individually generated and manipulated fragments of the source material used throughout a given
                piece of art.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={mutSelfAtt1} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              The number of pieces in the collection derived from a given artist's work varies considerably. In the collection, Vincent
              van Gogh's work is most frequently represented, while the work of Lucien Freud, Sarah Lucas, and Cindy Sherman is the rarest
              in the collection.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={mutSelfAtt2} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              While there are 48 of each variation for most of the variation types, there are only 41 CASCADE, CHAOS, PUZZLE, and LADDER pieces.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={mutSelfAtt3} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              One of the key parameters when generating the collection is the number of strands, which refers to the row/column count of
              the tiles that comprise each image. Pieces with a moderate number of strands are the most common; pieces with fewer strands
              are less common; and pieces with the largest number of strands are the rarest.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={mutSelfAtt4} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              Some of the pieces in the collection have a scaling factor, which refers to the rate at which the size of each tile decreases
              throughout the image. Most of the pieces in the collection have statically sized tiles, making the pieces with scaled tile
              size rarer.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

            <Grid item xs={12} sm={12} alignItems="stretch">
              <Typography align="center"><img src={mutSelfAtt8} height="500px" resizeMode="cover" position="relative"/></Typography><br />
            </Grid>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
              Some of the images in the collection have gaps between tiles. While there are some exceptions, in general images with larger
              gaps between tiles are rarer than those without (or with smaller) gaps between tiles.
              <br /><br /><br />
              </GreyTextTypography>
            </Grid>
*/}
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />


          </Grid>
        </Grid>

      </ThemeProvider>
    </main>
  );
};

export default MutableSelf;