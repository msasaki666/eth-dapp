import { ethers } from "hardhat";

async function main() {
  const [sender, receiver] = await ethers.provider
    .listAccounts()
    .then((accounts) =>
      accounts.map((account) => ethers.provider.getSigner(account)),
    );
  const amount = ethers.utils.parseEther("1"); // 送信額を指定（ここでは1 ETH）
  const receiverAddress = "0x1124DAAd95562426952142290058e1ff28C283dD";
  console.log(
    "Sending",
    amount.toString(),
    "ETH from",
    sender._address,
    "to",
    receiverAddress,
  );

  const tx = await sender.sendTransaction({
    to: receiverAddress,
    value: amount,
  });

  const receipt = await tx.wait();

  console.log("Transaction mined:", receipt.transactionHash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
