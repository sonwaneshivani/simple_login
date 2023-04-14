// let name="shivani";
// console.log(name);

function validate(){
    let name=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if(name=="shivi" && pass=="1234"){
        alert("Login Successful");
    }
    else{
        alert("Login Unsuccessful");
    }
}