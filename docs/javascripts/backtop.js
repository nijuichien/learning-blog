document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.createElement("button");
    backToTopButton.innerHTML = "TOP";
    backToTopButton.id = "back-to-top";
    document.body.appendChild(backToTopButton);

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});
