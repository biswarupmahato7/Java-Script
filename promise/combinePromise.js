function fetchData1() {
    // Return a Promise that resolves after 1 second
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve(`Data from fetchData1`)
            reject(`Error in Data1`)
        }, 1000);
    })
  }
  
  function fetchData2() {
    // Return a Promise that resolves after 2 seconds
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`Data from fetchData2`)
            reject(`Error in data2`)
        },2000)
    })
  }
  
  function fetchData3() {
    // Return a Promise that resolves after 3 seconds
      return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`Data from fetchData3`)
            reject(`Error in data2`)
        },3000)
    })
  }
  
  function fetchAllData() {
    // Use Promise.all() to execute all fetchData functions concurrently
    Promise.all([fetchData1(),fetchData2(),fetchData3()])
    .then((responses) =>{
        for(res of responses){
            console.log(res)
        }
    })
    .catch((err)=>console.log(`Error is - ${err}`))
  
  }
  
  fetchAllData();

  //example -2
  // const firstObj = fetch("https://dummyjson.com/products/1").then((response) =>
//    response.json()
// );

// const secondObj = fetch("https://dummyjson.com/users/1").then((response) =>
//   response.json()
// );

// const thirdObj = fetch("https://dummyjson.com/posts/1").then((response) =>
//   response.json()
// );

// Promise.all([firstObj, secondObj, thirdObj]).then((responses) => {
//   for (res of responses) {
//     console.log(res);
//   }
// }).catch(err => console.log(`Failed to fetch ${err}`));
