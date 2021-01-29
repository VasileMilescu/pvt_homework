document.getElementById("als-logo").addEventListener("click", function(){ 
    let logo = document.getElementsByClassName("als-logo-barcode")
    for (i = 0; i < logo.length; i++) {
        logo[i].style.color = 'blue'
    }
});