import "./App.css";
import { useMemo } from "react";

import Image from "./images/BG4W.png";

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

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
              <Background />
              <Box
                p={12}
                pt={10}
                style={{
                  width: "100vw",
                  backgroundImage: `url(${Image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",

                  height: "100vh",
                }}
              >
                <Box style={{ height: "60%", width: "100%" }}>
                  <Navbar />
                </Box>
                <Grid item xs={12}>
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
        <Detail />
      </Grid>
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <ImgCarousel />
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "black",
          paddingBottom: "100px",
        }}
      >
        <Heading
          title={"Roadmap"}
          description={
            "This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!"
          }
        />
      </Grid>

      <Grid container style={{ width: "100%", backgroundColor: "black" }}>
        <Roadmap />
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "black",
          paddingTop: "100px",
        }}
      >
        <Heading
          title={"FAQ"}
          description={
            " Below are the most common and important questions to get you started on purchasing a VeeFriends token."
          }
        />
      </Grid>
      <Grid container style={{ width: "100%", backgroundColor: "black" }}>
        <Faq />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
