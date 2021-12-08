var token = artifacts.require("ERC20Token.sol");
var evaluatorContract = artifacts.require("Evaluator.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await createToken(deployer, network, accounts); 
        await exo1(deployer, network, accounts); 
    });
};

//Ticker:  n_3N0
//Supply:  45385481000000000000000000
async function createToken(deployer, network, accounts) {
    ourToken = await token.new('SamSam', 'n_3N0', web3.utils.toBN('45385481000000000000000000'));
}


async function exo1(deployer, network, accounts) {
    evaluator = await evaluatorContract.at('0xcff8985FF63cDce92036A2747605FB7ead26423e');
    // samsam = await token.at(ourToken.address);
    await evaluator.submitExercice(ourToken.address);
    await evaluator.ex2_testErc20TickerAndSupply();
    console.log(ourToken.address);
}