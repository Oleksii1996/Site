(function() {
    var phoneBtn = document.getElementById("phone"),
        mailBtn = document.getElementById("mail");

    document.getElementById("phones").style.display = "none";
    document.getElementById("mails").style.display = "none";

    phoneBtn.addEventListener("mouseenter", function() {
        this.style.cursor = "pointer";
    });

    mailBtn.addEventListener("mouseenter", function() {
        this.style.cursor = "pointer";
    });

    phoneBtn.addEventListener("click", function() {
        var info = document.getElementById("phones");
        if (info.style.display == "none") {
            info.style.display = "block";
        } else {
            info.style.display = "none";
        }

    });

    mailBtn.addEventListener("click", function() {
        var info = document.getElementById("mails");
        if (info.style.display == "none") {
            info.style.display = "block";
        } else {
            info.style.display = "none";
        }

    });
})();