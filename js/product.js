$('.noword').keypress(function(event) {
	console.log(event.which);
	if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
		  event.preventDefault();
	}
});

$('input[type="tel"]').bind('input', function() {
  var c = this.selectionStart,
      r = /[^a-z0-9 .]/gi,
      v = $(this).val();
  if(r.test(v)) {
    $(this).val(v.replace(r, ''));
    c--;
  }
  this.setSelectionRange(c, c);
});

$(".enquiryshow").click(function(){
	$(".enquirynow").slideToggle();
  });

function careshow() {
  var x = document.getElementById("caremore");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.getElementById("careshow").innerHTML="Show Less";
  } else {
    x.style.display = "none";
	document.getElementById("careshow").innerHTML="Show More";
  }
  
}
function detailsshow() {
	var x = document.getElementById("detailsmore");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("detailsshow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("detailsshow").innerHTML="Show More";
	  
	}
  }
  function returnshow() {
	var x = document.getElementById("returnmore");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("returnshow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("returnshow").innerHTML="Show More";
	}
  } 
  function refundshow() {
	var x = document.getElementById("refundmore");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("refundshow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("refundshow").innerHTML="Show More";
	}
  }
  function manufacturershow() {
	var x = document.getElementById("manufacturermore");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("manufacturershow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("manufacturershow").innerHTML="Show More";
	}
  }