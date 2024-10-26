const accountID = 82795
let accountName = "Ayush"                    //a variable which is recommended to use as it follows the scope of block
var accountEmail = "ayush@gmail.com"         //a variable which is NOT recommended to use as it doesn't follow the scope of block
if(accountID == 82795){                     
accountCity = "Uttarakhand"                  //a variable which is NOT recommended to use as it doesn't follow the scope of block(its a global variable)
}


// accountID = 24696 // you can't reassign values to a constant (identifier used with const keyword)
accountName = "Akash"
accountEmail = "akash@gmail.com"
accountCity = "Chandigarh"

console.table([accountEmail,accountName,accountCity])