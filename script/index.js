
let friends=[]

function addFriend() {
    let name= document.querySelector('[input-data]').value

    friends.push(name)

    localStorage.setItem('friendNames',JSON.stringify(friends))
    displayFriends()
}

document.querySelector('[output]').addEventListener('click',addFriend)


function displayFriends(){
    console.log(JSON.parse(localStorage.getItem("friendNames")));
    display.innerText= JSON.parse(localStorage.getItem("friendNames"))
}





