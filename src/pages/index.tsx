import { useContractRead, useContract, useContractWrite, Web3Button} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useState } from "react";


export default function Home() {
  const [urmom, setUrmom] = useState("")
  const contractAddress = "0x6EaA4739f5296FF9694a5a1831e9fb9c3be2D702";
  const { contract } = useContract(contractAddress);

  const { data, isLoading, error } = useContractRead(
    contract,
    "add",
  );
  if (error) {
    console.error("failed to read contract", error);
  }
  const { mutateAsync: firstNoSet } = useContractWrite(contract, "firstNoSet");
  const { mutateAsync: secondNoSet } = useContractWrite(contract, "secondNoSet")


  const meow = async () => {
      try {
        const data = await firstNoSet({ args: [urmom] });
        console.log("contract call successs");
        console.log(data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
    const meow2 = async () => {
      try {
        const data = await secondNoSet({ args: [urmom] });
        console.log("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
  

  return (
    <div className="text-lg flex flex-col justify-center items-center">
      {isLoading ? <p>Loading...</p> : <p>Add: {data.toString()}</p>}
      <br></br>
      <input className="text-black text-md rounded-lg p-1 m-2" type="text" placeholder="your mom" value={urmom} onChange={(e) => setUrmom(e.target.value)}/>
      <button className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-4 py-1 text-md rounded-lg mt-2" onClick={meow}>meow 1</button>
      <button className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-4 py-1 text-md rounded-lg mt-2" onClick={meow2}>meow 2</button>
    </div>
  );
}
