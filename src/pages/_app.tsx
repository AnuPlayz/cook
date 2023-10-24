import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function App({ Component, pageProps }: AppProps) {
  return (<div>
  <ThirdwebProvider
    activeChain="mumbai"
    autoSwitch
    autoConnect
    secretKey={"En-DcKOlLOsImDlqFyuKbgAywPxya_gKOATT0E41O9X4v4HUkvxv-7GVrOWFu5efWjWPDm8I0VY2qgNEnkHz5A"}
    theme="dark"
    clientId="af574d551a74949aacbf76fbee4f40f4"
    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect(),
      trustWallet(),
      zerionWallet(),
      rainbowWallet(),
      phantomWallet(),
    ]}
  >
  <Component {...pageProps} />;
  <ConnectWallet />

</ThirdwebProvider></div>)
 
};


