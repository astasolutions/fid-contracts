const FIDContract = artifacts.require("FID");

module.exports = async function (deployer) {
  const tokenOwner = "0x80Ecb101C59b9483c5dDcb21361EdB95506f11E6";
  await deployer.deploy(FIDContract, tokenOwner);
  const FIDContractDeployed = await FIDContract.deployed();
  console.log("FID Contract Deployed:", FIDContractDeployed.address);
};
