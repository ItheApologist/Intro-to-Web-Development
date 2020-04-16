var Lis = document.querySelectorAll("li");

for(var i = 0; i < Lis.length; i++) {
    Lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected")
    });
    Lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected")
    });
    Lis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}