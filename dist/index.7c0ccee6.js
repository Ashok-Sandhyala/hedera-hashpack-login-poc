// Initialize HashConnect
const hashconnect = new HashConnect();
async function loginWithHashpack() {
    try {
        // Initialize HashConnect with metadata for your app
        const appMetadata = {
            name: "Hedera Hashpack Login POC",
            description: "A simple POC using Hashpack for Hedera login.",
            icon: "https://hashpack.app/favicon.ico" // Example icon (you can replace it)
        };
        // Initialize HashConnect and save state in local storage
        await hashconnect.init(appMetadata, "testnet", true); // testnet is for Hedera testnet, you can change to 'mainnet' for production
        // Establish a local connection with Hashpack
        const connectionData = await hashconnect.connectToLocalWallet();
        // Get and display the Hedera account ID after connection
        const accountId = connectionData.accountIds[0];
        document.getElementById("account-id").textContent = `Account ID: ${accountId}`;
    } catch (error) {
        console.error("Login failed:", error);
        document.getElementById("account-id").textContent = "Failed to log in. Please check the console for errors.";
    }
}
// Attach the login function to the button
document.getElementById("login-button").addEventListener("click", loginWithHashpack);

//# sourceMappingURL=index.7c0ccee6.js.map
