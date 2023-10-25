import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>  
  <ThirdwebProvider
    activeChain="mumbai"
    autoSwitch
    autoConnect
    secretKey="uDfkSfvNQ0O-6_YO5oIsr7IHta9IgyvpAUPVKQpOx0UC9MyxwFvU93u32r3lTtxzINeH9_8DNO1MvZTmh6uYYA"
    theme="dark"
    clientId="3b4bf0a94bc9e7552249cd763a42613c"
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
  
</ThirdwebProvider>
</div>
)


};


