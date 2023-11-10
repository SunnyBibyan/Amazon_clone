
document.getElementById("crossid").onclick = function() {
    closeSidebar()
};
document.getElementById("all-id").onclick = function() {
    openSidebar()
};


function closeSidebar(){
  document.getElementById("sidebarC").style.width = "0px"
  document.getElementById("crossid").style.width = "0px"
}

 function openSidebar(){
      document.getElementById("sidebarC").style.width = "365px"
      document.getElementById("crossid").style.width = "390px"
}

