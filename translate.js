const HashConnect = require('hashconnect');

// Create a new instance of HashConnect
const hashconnect = new HashConnect();

// Define the app data
const appData = {
  name: 'Hashconnect demo',
  description: 'a demo for hashconnect',
  icon: "https://www.google.com/url?sa=1&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos"
};

// Initialize HashConnect with the app data
hashconnect.init(appData).then((initData) => {
  // Get the private key from the initialization data
  const privateKey = initData.privkey;
  console.log(privateKey + ' is the priv key');

  // Connect to the wallet
  hashconnect.connect().then((state) => {
    // Get the topic from the connection state
    const topic = state.topic;

    // Generate a pairing string
    const pairingString = hashconnect.generatePairingString(state, 'testnet', false);

    // Find local wallets
    hashconnect.findLocalWallets();

    // Connect to the local wallet using the pairing string
    hashconnect.connectToLocalWallet(pairingString);
  });
});