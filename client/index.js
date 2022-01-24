var web3 = new Web3(Web3.givenProvider)

var instance;
var user;
var contractAddress = "0xFF8d30f6f26Fb4a2737d4F436Bfce9c82e8234f0";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0]

        console.log(instance)

        instance.events.Birth().on('data', function(event) {
            console.log(event)
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#KittyCreation").css("display", "block");
            $("#KittyCreation").text("owner:" +  owner + " kittyId:" + kittenId + " numId" + mumId + " dadId:" + dadId + " genes:" + genes)

        }).on('error', console.error)
    })
})

function createKitty() {
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(error){
            console.log(error);
        }
        else{
            console.log(txHash);
        }
    })
}