import { useContractRead, useContract,  } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "YOUR_CLIENT_ID",
});
export default function Home() {
  // Your smart contract address
  const contractAddress = "0x6EaA4739f5296FF9694a5a1831e9fb9c3be2D702";

  const { contract } = useContract(contractAddress);

  const { data, isLoading, error } = useContractRead(
    contract,
    "add",
  );
  console.log(data);

  if (error) {
    console.error("failed to read contract", error);
  }

  return (
    <div>{isLoading ? <p>Loading...</p> : <p>Contract Name: {data.toString()}</p>}</div>
  );
}

