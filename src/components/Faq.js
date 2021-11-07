import React from "react";
import FaqComp from "./FaqContent";

const Faq = () => {
  return (
    <React.Fragment>
      <FaqComp
        question={"Why create the Solforce Multiverse? "}
        answer={
          "We wanted to create a beautiful place where its inhabitants can have fun, engage with other residents and grow their own portfolio."
        }
      />
      <FaqComp
        question={"What is the Solforce?"}
        answer={
          "The Solforce, our first ever launch, will be a header art NFT series composed of 8,888 dog tags — Soltags, if you will — which would be the primary ticket to our multiverse"
        }
      />
      <FaqComp
        question={"What makes us different?"}
        answer={
          "We are not just building an NFT collection. Check our roadmap and discover how we are building an amazing neighborhood in the Solana metaverse. We are looking to build an ecosystem and community over everything else!"
        }
      />
      <FaqComp
        question={"When can I start collecting my Soltag NFTs?"}
        answer={"Dates for the public launch are to be announced. Stay tuned!"}
      />
      <FaqComp
        question={"How do I start collecting Soltag NFTs? "}
        answer={
          "You will be able to start collecting Soltags by minting them on this website."
        }
      />
      <FaqComp
        question={"How much Solana will it be to mint a Soltag NFT?"}
        answer={
          "We are going to announce this very soon. Those in our Discord will be the first to know. Stay tuned!"
        }
      />
      <FaqComp
        question={"How can I view my minted NFT?"}
        answer={
          "Once minted, simply go into your wallet to view your NFTs. If you don't have a wallet, we recommend Phantom!"
        }
      />
      <FaqComp
        question={"Is there a rarity system?"}
        answer={"Yes! You can check it on our Discord."}
      />
      <FaqComp
        question={"Will there be a secondary market?"}
        answer={
          "We are working on it. However, we will NOT list them until our public launch. We want our residents to buy for the long term."
        }
      />
      <FaqComp
        question={"Where is the digital artwork stored?"}
        answer={
          "Soltag NFTs are stored on Arweave, a “permaweb” that backs data with sustainable and perpetual endowments, allowing individuals and communities to truly store data forever. We do not want your Soltags suddenly disappearing one day — because that would be ironic. Your Soltags, and with them, your souls, are here to stay forever. "
        }
      />
      <FaqComp
        question={"How are the Soltags generated?"}
        answer={
          "They are generated by magical lines of code that factor in rarity and ensure that our 8888 Soltags are all one of themselves and 100% unique."
        }
      />
    </React.Fragment>
  );
};

export default Faq;
