// npx hardhat run scripts/run.tsの時の流れ
// ローカル環境でイーサリアムネットワークを新規に作成する。
// ローカル環境でコントラクトをデプロイする。
// プログラムが終了すると、Hardhatは自動的にそのイーサリアムネットワークを削除する。
import { ethers } from "hardhat";

const main = async () => {
  // 任意のアドレスを返す関数
  const [owner, randomPerson] = await ethers.getSigners();
  // コントラクトのコンパイル
  // コントラクトをコンパイルする。コントラクトを扱うために必要なファイルがartifactsディレクトリの直下に生成される
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // コントラクトのデプロイ
  // HardhatがローカルのEthereumネットワークを、コントラクトのためだけに作成
  // スクリプトの実行が完了した後、このローカル・ネットワークは破棄される
  const waveContract = await waveContractFactory.deploy();
  // ローカルのブロックチェーンにデプロイされるまで待つ
  const wavePortal = await waveContract.deployed();

  console.log("Contract deployed to:", wavePortal.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
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
