// console.log("I")
// console.log("Love")
// let j  = 0
// for (let i =0 ; i <=10000000000; i++)           // example of sync , yaha pr for loop kafi bara hai to stuck hoga code , to ye draw back hai sync ka 
//     j=j+1
// console.log("icecream")



// set timeout function (use to delay ) ;   // async kr diya code ko 

console.log("I");
setTimeout(()=>{            // notes : setTimeout Asyncsly (Async) chalta hai , parallel mae chalta rahega block nahi hoga code 
    console.log("eat")
} ,1000)          // set timeout ko ik function pass kiya hai 1 second bad eat print karo 

console.log("ice cream") 

// phele i print hoga , phir icecream , phir eat kyu kay eat pr 1 second ka delya hai (1000 (ms) milisecond)



console.log("I");
setTimeout(()=>{  
    console.log("eat") 
    setTimeout(()=>{                    // set timeout within set timeout
        console.log("icecream")          
    } ,1000)         
} ,1000)          





// -----------------------------------------------------------------------------------------------------//

// call backs functions 

function OrderPizza (prepareCb :any){                    // ordering a pizza function

console.log("Placing order")          // palcing order timeout kay ander nahi likha to ye without any delay print hojaega

    setTimeout(() => {
        console.log("Order placed");     // order placed print karega 3 second bad
        prepareCb() // this is preparePizza() function in other words .... see line 65 // call back funtion  .. preparePizaza funtion chalega yaha
    }, 3000);                          // having a 3 second delay
}

 

function preparePizza (){
    console.log("Preparing pizaa")

    setTimeout(()=>{
        console.log("Pizza is being prepared! 🍕");  // windows + .  to acces to emojis 
        
    },3000)
}




// what we need 
// placing order
// order placed 
// preparing pizza 
// pizza is being prepared 

OrderPizza(preparePizza) ;  // call backfunction  (hum ne order pizza kay ander jo parameter tha Preparecb uski jaga hum nae orderpizza kay ander preparePizza ka function call kr diya )
// call back is used to control async behaviour 


// -------------------------------------------------------------------------------------------------//
// Promises (call back alternative)
 
// promise bannanay ka tareeqa
function orderPizzaPromise (){
    return new Promise ((resolve) => {          // resolve function   
         setTimeout(()=>{
            console.log("Order Placed")
            resolve("") 
         },3000)
    });                          // prmoise is a special type of function , ye maan lo ka ham 1 prommise bana rahay hai
}

function preparePizzaPromise (){
    return new Promise ((resolve )=>{
        console.log("Preparing pizaa")
        
    setTimeout(()=>{
        console.log("Pizza is being prepared! 🍕");  // windows + .  to acces to emojis 
        resolve("")
    },3000)
    })
    
}

orderPizzaPromise()
.then(preparePizzaPromise)    // .then =  resolve function      // ik kay bad ik function print kar saktay hai    
  





