
function Bankaccount(name,balance=0){
    this.name=name;
    this.accountNUmber=Date.now();
    this.balance=balance

    this.deposite=function(amount){
        this.balance = this.balance+ amount;
    }

}

const accounts=[];
const accountforms= document.querySelector(".deposite")
const depositeamount=document.querySelector(".amountEnter");
const customerName = document.querySelector(".customerName")


        accountforms.addEventListener('submit',(e)=>{
            e.preventDefault();

            const account= new Bankaccount(customerName.value , +depositeamount.value)
            accounts.push(account)

            console.log(accounts)
        })



// const RaviAccount= new Bankaccount("Ravi",1000);

// RaviAccount.deposite(500)

// console.log(RaviAccount)

