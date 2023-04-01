import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/umK0Q1gUnfHv1vuZh8Cw72h9Ja3gWR8I",
      accounts: [
        "e89dbffe03303d25c20760599c9018dab2dddb8acece3f37bda9c3be293978c6",
      ],
    },
  },
};

export default config;
