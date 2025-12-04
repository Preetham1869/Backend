function getUserDetails(id, getUserSubjects){
    console.log("getting user details by userId", id);
    getUserSubjects({userroll:"1869"});
}
function getUserSubjects(userRoll, getUserMarks){
    console.log("getting user subjects by roll number", userRoll); // API call
    getUserMarks({subid: "SM-1"});
}
function getUserMarks(userSubId){
    console.log("getting user marks with subid", userSubId);
}
getUserDetails("1054",function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId);
    });
})