function myFunction() {
    var x = document.getElementById("sidebar");
    if (x.className === "menu-left border") {
        x.className += " active";
    } else {
        x.className = "menu-left border";
    }

    var els = document.querySelectorAll("#lv2");
    for (var i = 0; i < els.length; i++) {
		 if (els[i].className === "list-lv2") {
	        els[i].classList.remove("list-lv2");
	    } else {
	        els[i].className += "list-lv2";
	    }
	}

	var main1 = document.getElementById("main1");
	if (main1.className === "main1 border") {
        main1.className += " main1res";
    } else {
        main1.className = "main1 border";
    }
}

function minimizeFunction(){
    var icon = document.getElementById("icon");
    var els = document.querySelectorAll("#lv2");
    for (var i = 0; i < els.length; i++) {
         if (els[i].className === "list-lv2") {
            els[i].classList += " minimize";
            icon.classList = "fa fa-plus";
        } else {
            els[i].className = "list-lv2";
            icon.classList = "fa fa-minus";
        }  
    }
}