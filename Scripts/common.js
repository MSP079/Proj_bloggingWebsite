function hideSignInModal() {
  var modal = document.getElementById("modalcontent");
  modal.style.display = "none";
}
  
function hideSignUpModal() {
  var modal = document.getElementById("modal-content");
  modal.style.display = "none";
}

let modal1 = document.getElementById("modal-content");
function showSignUpModal() {
  modal1.classList.add("open-modal");
}
  
let modal2 = document.getElementById("modalcontent")
function showSignInModal() {
  modal2.classList.add("open-modal");
}

let postModalCreat = document.getElementById("newPostModal");
function showCreatePost() {
  postModalCreat.classList.add("open-newPostmodal");
}

function hideCreatePostModal(){
  var modal = document.getElementById("newPostModal");
  modal.style.display = "none";
}


function navigateToBlogList(){
  location.href = "html/postslist.html"
}