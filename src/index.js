import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { UseWalletProvider } from "use-wallet";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UseWalletProvider
    autoConnect
    connectors={{
      injected: {
        //allows you to connect and switch between mainnet and rinkeby within Metamask.
        chainId: [1, 4]
      },
      walletconnect: {
        rpc: {
          1: "https://mainnet.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1",
          4: "https://rinkeby.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1"
        },
        bridge: "https://bridge.walletconnect.org",
        pollingInterval: 12000
      },
      walletlink: {
        chainId: 1,
        url: "https://mainnet.eth.aragon.network/"
      }
    }}
  >
    <App />
    <style>
      {`
        body {
          width: 40rem;
          margin: 0 auto;
          font-family: sans-serif;
          font-size: 18px;
          line-height: 1.5;
        }
        button {
          width: 6rem;
        }
        h1 {
          font-weight: 400;
        }
        p {
          display: grid;
          justify-content: space-between;
          align-items: center;
          grid-auto-flow: column;
          gap: 1rem;
          align-items: center;
          margin: 2rem 0;
        }
        button {
          height: 3rem;
          cursor: pointer;
          font-size: 1rem;
          padding: 0;
        }
        .connect-label {
          margin-bottom: 1rem;
        }
        .connect-buttons {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        }
        .connect-buttons button {
          width: 100%;
          height: 4rem;
        }
      `}
    </style>
  </UseWalletProvider>,
  rootElement
);
