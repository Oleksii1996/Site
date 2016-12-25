(function() {
    var selectContainer = document.getElementsByClassName("select")[0],
        select = document.createElement("select"),
        arrOption = [];

    arrOption[0] = document.createElement("option");
    arrOption[0].label = "Все";

    arrOption[1] = document.createElement("option");
    arrOption[1].label = "Первые блюда";

    arrOption[2] = document.createElement("option");
    arrOption[2].label = "Мясные блюда";

    arrOption[3] = document.createElement("option");
    arrOption[3].label = "Десерты";

    for (var i = 0; i < arrOption.length; i++) {
        select.appendChild(arrOption[i]);
    }

    select.addEventListener("change", function() {
        if (arrOption[0].selected) {
            for (var i = 1; i < arrOption.length; i++) {
                document.getElementById("gallery" + i).style.display = "block";
            }
            return;
        }

        for (i = 1; i < arrOption.length; i++) {
            if (arrOption[i].selected) {
                document.getElementById("gallery" + i).style.display = "block";
                for (var j = 1; j < arrOption.length; j++) {
                    if (j != i) {
                        document.getElementById("gallery" + j).style.display = "none";
                    }
                }
                return;
            }
        }
    });

    selectContainer.appendChild(select);
})();