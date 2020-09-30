console.log('hello to you :)');


function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("banniere").style.backgroundColor = "#A92F20";
        document.getElementById("banniere").style.padding = "10px 0";
        document.getElementById("banniere").style.position = "fixed";

        document.getElementById("logo").style.width = "60px";
        document.getElementById("logo").style.marginTop = "0px";
        document.getElementById("logo").style.top = "10px";
        document.getElementById("logo").style.left = "100px";



    } else {
        document.getElementById("banniere").style.backgroundColor = "transparent";
        document.getElementById("banniere").style.position = "fixed";
        document.getElementById("banniere").style.padding = "60px 0";
        document.getElementById("logo").style.width = "100px";
        document.getElementById("logo").style.marginTop = "15px";
        document.getElementById("logo").style.top = "10px";
        document.getElementById("logo").style.left = "80px";

    }
}



