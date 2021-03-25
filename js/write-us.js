var linkAbout = document.querySelector(".button-write");
		var aboutPopup = document.querySelector(".write-us");
		var aboutClose = aboutPopup.querySelector(".close");
		var form = aboutPopup.querySelector("form");
		var name = aboutPopup.querySelector("[name=name_input]");
		var email = aboutPopup.querySelector("[name=email]");
		var textarea = aboutPopup.querySelector("[name=big-text]");
		var overlay = document.querySelector(".overlay");
		linkAbout.addEventListener("click", function(evt) {
			evt.preventDefault();
			aboutPopup.classList.add("write-us-open");
			overlay.classList.add("overlay-on");
		});
		aboutClose.addEventListener("click", function(evt) {
			evt.preventDefault();
			aboutPopup.classList.remove("write-us-open");
			overlay.classList.remove("overlay-on");
			aboutPopup.classList.remove("write-error");
		});
		window.addEventListener("keydown", function(evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (aboutPopup.classList.contains("write-us-open")) {
					aboutPopup.classList.remove("write-us-open");
					overlay.classList.remove("overlay-on");
					aboutPopup.classList.remove("write-error");
				}
			}
		});
		form.addEventListener("submit", function(evt) {
			if (!name.value && !email.value) {
				evt.preventDefault();
				aboutPopup.classList.remove("write-error");
				aboutPopup.offsetHeight = aboutPopup.offsetHeight;
				aboutPopup.classList.add("write-error");
			} 
		});
		overlay.addEventListener("click", function(evt) {
			aboutPopup.classList.remove("write-us-open");
			overlay.classList.remove("overlay-on");
			aboutPopup.classList.remove("write-error");
		})