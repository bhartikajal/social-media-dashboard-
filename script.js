var sidebarOpen =false;
var sidebar =document.getElementById("sidebar");

function opensidebar(){
    if (!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen =true;

    }
}


function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-resposive");
        sidebarOpen =false;
    }
}
