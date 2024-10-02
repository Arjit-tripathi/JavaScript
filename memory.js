//stack memory (Primtive)
//copy milta hain original value ka 





let youtubeChanel = "arjittripathi1@gmail.com"
let anotherName = youtubeChanel

anotherName = "gopal tripathi"

console.log(youtubeChanel);
console.log(anotherName);


//Heap memory (Non-primtive )

//original value Reference milta 

let userOne = {
    email: "arjit@google.com",
    upi : "arjit@ybl"
}

let userTwo = userOne
userTwo.email = "ram@google.com"

console.log(userOne.email);
console.log(userTwo.email);