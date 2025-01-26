document.getElementsByClassName("click", function(event) {
    event.preventDefault();
    event.target.classList.add("clicked");
})