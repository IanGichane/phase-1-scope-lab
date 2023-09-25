// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();

}
console.log(customerName)


let bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob'
  
}
setBestCustomer()
console.log(bestCustomer)

function overwriteBestCustomer(bestbestCustomer){
   bestCustomer=bestbestCustomer
}
overwriteBestCustomer('maybe bob')
console.log(bestCustomer)
const leastFavoriteCustomer= 'maasai'
function changeLeastFavoriteCustomer(updateCustomer){
   leastFavoriteCustomer = updateCustomer
}
changeLeastFavoriteCustomer('Loso')
console.log(leastFavoriteCustomer)