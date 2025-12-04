function getUserDetails(id, getUserSubjects) {
    return new Promise((resolve, reject) => {
        resolve({ rollnumber: "1869" });
    });
};
function getUserSubjects(userRoll) {
    return new Promise((resolve, reject) => {
        resolve({ userSubId: "SM-1" });
    });
}
function getUserMarks(userSubId) {
    return new Promise((resolve, reject) => {
        resolve("Getting user marks with subid ", userSubId);
    })
};
getUserDetails("1054")
    .then((result) => { return getUserSubjects(result.rollnumber) })
    .then((result) => { return getUserMarks(result.userSubId) })
    .then((result) => { console.log("Result: ", result) })
    .catch((error) => { console.log(error) });

// const MyPromise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("Promise resolved successfully");
//     } else{
//         reject("Promise rejected");
//     }
// });
// MyPromise.then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// });