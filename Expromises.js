function mainCourse(item){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({Fav:"Pasta" });
        },3000);
    })
};
function mainCourse1(item){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({Fav:"Pizza" });
        },3000);
    })
}
function mainCourse2(item){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pay the bill", item);
        }
        ,3000);
    })
}
const mine = async() =>{
    console.log("Preparing dish-1")
    const complete= await mainCourse("54");
    console.log("Completed", complete);
    console.log("Next item");
    console.log("Preparing dish-2")
    const complete1= await mainCourse1("21");
    console.log("Completed", complete1);
    console.log("Next item");
    console.log("Preparing dish-3")
    const complete2= await mainCourse2("69");
    console.log("Completed", complete2);
    console.log("I'm done");
    console.log("Thank you");
    console.log("do it again");
};
mine();