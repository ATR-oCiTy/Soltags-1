import "./App.css";
import { useMemo } from "react";
import { useEffect } from "react";
import Image from "./images/BG4W.png";
import TeamImage1 from "./images/alex.png";
import TeamImage2 from "./images/shadow.png";
import TeamImage3 from "./images/mad.png";
import TeamImage4 from "./images/darksider.png";
import artGIF from "./images/tagGIF.gif";
import "aos/dist/aos.css";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider, Grid, Box } from "@material-ui/core";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Roadmap from "./components/Roadmap";
import Heading from "./components/HeadingComp";
import ImgCarousel from "./components/ImgCarousel";
import Faq from "./components/Faq";
import Team from "./components/Team";

const AOS = require("aos");

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);
const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);
const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
              <Box
                pt={10}
                style={{
                  backgroundImage: `url(${Image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  width: "100%",
                }}
              >
                <Background />
                <Box
                  style={{
                    height: "20%",
                    width: "100%",
                    paddingLeft: "20vh",
                    paddingRight: "20vh",
                  }}
                >
                  <Navbar />
                </Box>
                <Grid item xs={12} style={{ height: "30vh" }}>
                  <Home
                    candyMachineId={candyMachineId}
                    config={config}
                    connection={connection}
                    startDate={startDateSeed}
                    treasury={treasury}
                    txTimeout={txTimeout}
                  />
                </Grid>
              </Box>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </Grid>
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <Detail image={artGIF} />
      </Grid>
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <ImgCarousel />
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "#101921;",
          paddingBottom: "100px",
        }}
        data-aos='flip-right'
        data-aos-anchor='.roadmapTrigger'
      >
        <Heading
          title={"Roadmap"}
          description={
            "This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!"
          }
        />
      </Grid>

      <Grid
        container
        className='roadmapTrigger'
        style={{ width: "100%", backgroundColor: "#101921;" }}
        data-aos='fade-up'
      >
        <Roadmap />
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "#101921;",
          paddingTop: "75px",
        }}
        data-aos='flip-left'
        data-aos-anchor='.faqTrigger'
      >
        <Heading
          title={"FAQ"}
          description={
            "Below are the most common and important questions to get you started on purchasing a VeeFriends token."
          }
        />
      </Grid>
      <Grid
        container
        className='faqTrigger'
        style={{ width: "100%", backgroundColor: "#101921;" }}
        data-aos='fade-up'
      >
        <Faq />
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "#101921;",
          paddingTop: "75px",
          paddingBottom: "40px",
        }}
        data-aos='flip-right'
        data-aos-anchor='.teamTrigger'
      >
        <Heading
          title={"Team"}
          description={
            "Sanctuary Labs is a team of friends that came together to build with our Art. We've been told that our Art won't amount to something. We are here to prove our family and the world wrong."
          }
        />
      </Grid>
      <Grid
        container
        className='teamTrigger'
        style={{
          width: "100%",
          backgroundColor: "#101921;",
        }}
        data-aos='fade-up'
      >
        <Team image={TeamImage1} imageName={"Soldier"} />
        <Team image={TeamImage2} imageName={"Alex"} />
        <Team image={TeamImage3} imageName={"Darksider"} />
        <Team image={TeamImage4} imageName={"Mad"} />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
