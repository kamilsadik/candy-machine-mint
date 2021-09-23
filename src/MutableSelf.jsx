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

import cascade from "./assets/img/cascade.png";
import chaos from "./assets/img/chaos.png";
import blind from "./assets/img/blind.png";
import helix from "./assets/img/helix.png";
import ladder from "./assets/img/ladder.png";
import matrix from "./assets/img/matrix.png";
import mosaic from "./assets/img/mosaic.png";
import puzzle from "./assets/img/puzzle.png";
import pyre from "./assets/img/pyre.png";
import recognition from "./assets/img/recognition.png";
import shattered from "./assets/img/shattered.png";
import torrent from "./assets/img/torrent.png";

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
          &mut self (Mutable Self) <br /><br />
        </WhiteTextTypography>

        <Grid container direction="column">
          <Grid item container>

            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                &mut self is an upcoming collection, which consists of 548 generative collages based on masterpieces of self-portraiture.
                The methodology behind each piece is to "shred" the original portrait into pieces, and to reconstruct those pieces in an aesthetically pleasing way.
                <br /><br />
                The collection consists of 12 variations on each of the 48 masterpieces used as source material. The variations
                of each self portrait serve to build upon each artist's notion of self, while also inviting the viewer to consider
                their own concept of self.
                Variations range from slight distortions to the
                source material, to heavily abstracted deconstructions. Each piece in the collection is generated
                completely algorithmically. Examples of each variation are shown below.
                <br /><br />
                True to its roots on the Solana blockchain, the collection's title is an homage to
                the <a href="https://www.reddit.com/r/rust/comments/8e6yh7/comment/dxsvpqr/?utm_source=share&utm_medium=web2x&context=3" target="_blank">Rust Programming Language</a>.
                Thematically, the collection draws inspiration heavily from Zen, and from the work of Meshuggah and Gojira.
                <br /><br />
                The mint date of &mut self will be announced in the coming days, with 25% of all sale proceeds going to the <a href="https://maps.org/" target="_blank">Multidisciplinary Association for Psychedelic Studies</a> to
                aid in their work to fight treatment-resistant depression and other chronic mental health ailments.
                <br /><br /><br /><br />
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={3} />

            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10} alignItems="stretch">
              <WhiteTextTypography variant="h4" align="left">
                Variations <br /><br />
              </WhiteTextTypography>
            </Grid>
            <Grid item xs={false} sm={1} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography>
                <br /><br /><br /><br /><br />
                CASCADE is among the most striking of the variations within the &mut self collection. The backdrop consists of an algorithmically
                distorted, grayscale version of the source material. In the foreground, fragments of the portrait are shuffled, and seem to be cascading
                down toward the lower right hand corner of the image. CASCADE variations conjure a sense of the artist conceiving of himself as,
                in the words of Meshuggah, a "fractal illusion," paving the way for the increasing abstraction to come in later variations.<br /><br />
                The source material for this piece is Gustave Courbet's "Le Désespéré" (1843-45).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={cascade} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={chaos} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                CHAOS builds upon the foundation laid by CASCADE, but taking the entropy to another level. The backdrop consists of an algorithmically
                distorted, grayscale version of the source material. In the foreground, small fragments of the portrait are shuffled, swirling
                in a tempest around the portraitist's gaze. CHAOS variations are among the most vibrant in the collection, balancing between the
                literal and abstraction in a swirl of color that pays homage to the pixelated origins of blockchain-based
                digital art.<br /><br />
                The source material for this piece is Vincent van Gogh's "Self Portrait" (1887).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />


            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                In MATRIX, the backdrop has fallen away. The viewer is left with a falling array of fragments from the original portrait, as the journey
                into abstraction reaches its climax.<br /><br />
                The source material for this piece is Yayoi Kusama's "Self Portrait" (2016).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={matrix} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={torrent} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                TORRENT takes the distortion of MATRIX to another level. By this point, the original portrait is completely indiscernible, and what remains
                is a fragmented gradient hinting at the color palette of the original piece.<br /><br />
                The source material for this piece is Angelica Kauffman's "Self Portrait" (1770-75).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                LADDER approaches the first level of deconstruction from another angle. Each tile is large enough to distinguish elements of the original portrait.
                The portrait is presented in horizontal strips, randomly placed to create gaps and overlap.<br /><br />
                The source material for this piece is Paul Gauguin's "Self Portrait with Halo" (1889).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={ladder} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={blind} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br /><br />
                BLIND uses the same generative methodology as LADDER, but with narrower strips to make the physical self more difficult to discern, presenting the portraitist
                in a collage-like manner.<br /><br />
                The source material for this piece is Edvard Munch's "Night Wanderer" (1924).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br /><br />
                In HELIX, the transition to abstraction is complete. Using a more entropic version of the algorithm that generates BLIND and LADDER, HELIX creates
                a spiral-like effect in a flurry of colors.<br /><br />
                The source material for this piece is Andy Warhol's "Six Self Portraits" (1986).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={helix} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={pyre} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                PYRE is arguably the most highly entropic variation in the collection. In this variation, the original portrait, after being shattered into tiny tiles,
                is reconstructed into narrow horizontal strands. Each strand is then randomly placed, and is truncated depending on its placement. The resulting visual
                effect, especially for the brightly colored portraits in the collection, is a sense of the self as a burning pyre.<br /><br />
                The source material for this piece is Yayoi Kusama's "Self Portrait" (2010).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                PUZZLE was the first variation to be created in the collection. It carries with it the greatest correspondence to the original portrait, and is reminiscent
                of a sliding puzzle. At this stage, the deconstruction of the self seems reversable, like a puzzle to be solved.<br /><br />
                The source material for this piece is Vincent van Gogh's "Self Portrait with a Bandaged Ear" (1889).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={puzzle} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={recognition} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br /><br />
                RECOGNITION builds upon the foundation laid by PUZZLE, but further deconstructs the original image. As the featured example shows,
                RECOGNITION is among the most powerful variations in the collection, combining disorder with the ability to discern an errant eye,
                ear, or nail in the flesh.<br /><br />
                The source material for this piece is Frida Kahlo's "La Columna Rota" (1944).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={false} sm={2} />

            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                In MOSAIC, the loss of self is manifest. The viewer is presented with
                a fragmentary view of the original portrait. The purpose of this variation is to compel the viewer to focus on the individual components that comprise the self,
                both visually and psychologically.<br /><br />
                The source material for this piece is Egon Schiele's "Self Portrait" (1910).
              </GreyTextTypography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={mosaic} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>


            <Grid item xs={12} sm={6} alignItems="stretch">
              <Typography align="center"><img src={shattered} height="500px" resizeMode="cover" position="relative"/></Typography><br /><br />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch">
              <GreyTextTypography variant="body1" align="center">
                <br /><br /><br /><br /><br /><br />
                SHATTERED is the most avant-garde of the variations in the collection, and is the truest homage to the pixelation that is the
                hallmark of early blockchain-based digital art.<br /><br />
                The source material for this piece is Vincent van Gogh's "Self Portrait in a Straw Hat" (1887).
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
            <Grid item xs={false} sm={3} />
            <Grid item xs={false} sm={2} />

          </Grid>
        </Grid>

      </ThemeProvider>
    </main>
  );
};

export default MutableSelf;