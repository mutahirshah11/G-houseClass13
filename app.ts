// function Photo1 (){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
        
//         console.log("[Photo 1]")
//         resolve("succes")
//       },2000)
//     })
// }

// function Photo2 (){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
        
//         console.log("[Photo 2]")
//         resolve("succes")
//       },2000)
//     })
// }


// console.log("Loading Photo 1.....")
// Photo1().then(()=>{
//     console.log("Loading Photo 2.....")
//     Photo2().then(()=>{

//     })

//     })








function GetData(MyData :any){
   return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
             console.log("Data :",MyData)
             resolve("success")
        },3000)
   })
}

// promise chain 

console.log("Loading Your Data .....")
GetData(1)

.then(()=>{
    console.log("Data printed")
    return GetData(2) ; 
    
})
.then(()=>{
    console.log("Data Printed")
    return GetData(3)
})
.then(()=>{
    console.log("Data Printed")
    return GetData(4) 
})
.then((resolve)=>{
    console.log("Data Printed")
})

// asyn await

function data (MyData :any){
    return new Promise((resolve ,reject)=>{
         setTimeout(()=>{
              console.log("Data :",MyData)
              resolve("success")
         },3000)
    })
 }

 (async function () {    // used iffi 
    await data(1)
    await data(2)
    await data(3)
    await data(4)
    await data(5)
    await data(6)   
})(); 