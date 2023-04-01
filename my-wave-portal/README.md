# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/deploy.ts --network localhost
```

## 参考

<https://app.unchain.tech/learn/ETH-dApp/ja/0/1/>

## ローカルブロックチェーンにデプロイするときの手順

1. ローカルでブロックチェーンネットワーク起動`npx hardhat node`
1. デプロイ`npx hardhat run scripts/deploy.ts --network localhost`
1. MetaMaskのlocalhostのchainIDをコンソールのログに記載の適切なものに変更する
1. イーサがないので、送りたいアドレスを設定の上、実行`npx hardhat run scripts/send_eth.ts --network localhost`
