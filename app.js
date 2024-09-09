import { HashConnect, HashConnectConnectionState } from 'hashconnect';
import { LedgerId } from '@hashgraph/sdk';


const appMetadata = {
    name: "Hash Demo",
    description: "Demo description for Hashpack",
    icons: ["https://www.npmjs.com/package/hashconnect"], 
    url: "http://127.0.0.1" 
};

let hashconnect;
let state = HashConnectConnectionState.Disconnected;
let pairingData = null;

export const pairHashpack = async () => {
    try {
        hashconnect = new HashConnect(LedgerId.TESTNET, "684d701490ec476ccab189c11ca10cbe", appMetadata, true);
        setUpHashConnectEvents();
        await hashconnect.init();
        hashconnect.openPairingModal();
    } catch (error) {
        console.error("Error during pairing:", error);
    }
};

function setUpHashConnectEvents() {
    hashconnect.pairingEvent.on((newPairing) => {
        pairingData = newPairing;
        document.getElementById('account-id').innerText = `Account ID: ${newPairing.accountIds[0]}`;
    });

    hashconnect.disconnectionEvent.on(() => {
        pairingData = null;
    });

    hashconnect.connectionStatusChangeEvent.on((connectionStatus) => {
        state = connectionStatus;
    });
}
