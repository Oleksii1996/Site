(function() {
    var arrBtn = [];

    arrBtn[0] = document.createElement("input");
    arrBtn[0].type = "button";
    arrBtn[0].value = "Главная";

    arrBtn[1] = document.createElement("input");
    arrBtn[1].type = "button";
    arrBtn[1].value = "Меню";

    arrBtn[2] = document.createElement("input");
    arrBtn[2].type = "button";
    arrBtn[2].value = "Оформление заказа";

    arrBtn[3] = document.createElement("input");
    arrBtn[3].type = "button";
    arrBtn[3].value = "Контакты";

    arrBtn[4] = document.createElement("input");
    arrBtn[4].type = "button";
    arrBtn[4].value = "Помощь";
    arrBtn[4].style.float = "right";

    this.onload = function() {
        var menu = document.getElementById("menu");

        for (var i = 0; i < arrBtn.length; i++) {
            menu.appendChild(arrBtn[i]);
        }

        for (var i = 0; i < arrBtn.length; i++) {
            (function(i) {
                arrBtn[i].addEventListener("click", function() {
                    arrBtn[i].style.borderBottom = "1px solid orange";
                    document.getElementById("section" + i.toString()).style.display = "block";
                    for (var j = 0; j < arrBtn.length; j++) {
                        if (j != i) {
                            arrBtn[j].style.borderBottom = "none";
                            document.getElementById("section" + j.toString()).style.display = "none";
                        }
                    }
                });
            })(i);
        }

        arrBtn[0].click();
    };
})();