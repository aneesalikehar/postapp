function getdata(){
    let getInput = document.getElementById("post-text");
    let getData = document.getElementById("Post");
    if(getInput.value.trim()!==''){
    getData.innerHTML += `
    <div class = "post-main">
    <div class = "Id-area" >
    <img src="./img/anes.jpg" alt="">
   <p>Anees Ali Kehar</p>
   </div>
   <div class = "Post">
    <div class "post-tittle">
    ${getInput.value}
   </div>
    <div>
    <button class="btn" onclick="DeletePost(event)"><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>`   
    
getInput.value = '';
}
}






function DeletePost(event){
    event.target.closest('.post-main').remove()    
}