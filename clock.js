var clock = document.createElement("table");
clock.id = "clock";

function clockCreate() {
    for (var x = 0; x < 6; x++) {
        var row = clock.insertRow();

        for (var y = 0; y < 12; y++) {
            var td = row.insertCell();
          	
            if (x === 0) {
            	row.id = "hours";
            	td.id = "h" + (y+1);
        		td.appendChild(document.createTextNode(y+1));
            } else {
	        	row.id = "mins";
	        	if ((y + (12 * (x-1))) < 10) {
		        	td.id = (+y + (12 * (x-1)));
	        		td.appendChild(document.createTextNode("0" + (+y + (12 * (x-1)))));
	        	} else {
		        	td.id = (y + (12 * (x-1)));
	        		td.appendChild(document.createTextNode((y + (12 * (x-1)))));
	        	}
	        }

	        td.style.background = "#000";
	        td.style.color = "#555";
	        td.style.textAlign = "center";
            td.style.border = "3px solid #999";
            td.className = "inactive";
        }
    }	
    document.body.insertBefore(clock, document.body.firstChild);
}

setInterval(
	function updateClock() {
		var t = new Date().toLocaleTimeString().toString().replace(/(:\d{2}| [AP]M)$/, "").split(":");
		var h = t[0];
		var m = (t[1].length === 1 ? "0"+t[1] : t[1]);
		var s = t[2];

		var sprev = (s !== "00" ? s-1 : "59");
		var mprev = (m !== "00" ? m-1 : "59");
		var hprev = (h !== ("h"+h) ? h-1 : "59");

		var x = document.getElementsByClassName("inactive");
		for (var i = 0; i < x.length; i++) {
		     x[i].style.color = "#555";
		}

		document.getElementById("h"+h).style.color = "#F00";
		document.getElementById(+m).style.color = "#3498db";
		document.getElementById(+s).style.color = "#fff";
	}, 1000);