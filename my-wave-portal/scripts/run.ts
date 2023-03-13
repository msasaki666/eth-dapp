import { ethers } from "hardhat";

const main = async () => {
  // コントラクトのコンパイル
  // コントラクトをコンパイルする。コントラクトを扱うために必要なファイルがartifactsディレクトリの直下に生成される
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // コントラクトのデプロイ
  // HardhatがローカルのEthereumネットワークを、コントラクトのためだけに作成
  // スクリプトの実行が完了した後、このローカル・ネットワークは破棄される
  const waveContract = await waveContractFactory.deploy();
  // ローカルのブロックチェーンにデプロイされるまで待つ
  const wavePortal = await waveContract.deployed();

  console.log("WavePortal address: ", wavePortal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
