let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");
btn.addEventListener("click", function(){
    let li= document.createElement("li");
    li.innerText=inp.value;


    let delbtn=document.createElement("button"); 
    delbtn.innerText= "delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);

    ul.appendChild(li);
    // console.log(inp.value);
    inp.value= "";
})

// let delBtns= document.querySelectorAll(".delete");
// for(let delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     })
// }

//so we'll use the eventlisteners on the parent insted

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON") {
//         console.log("Delete");
//     }
//     else{
//         console.log("don't delete" );
//     }
// })

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("Delete");
    }
})