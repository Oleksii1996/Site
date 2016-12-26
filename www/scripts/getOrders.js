function getXmlHttp() {
    var xmlhttp;

    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

(function () {
    document.getElementById("getOrders").addEventListener("click", function() {
        var xmlhttp = getXmlHttp();
   
        xmlhttp.onreadystatechange = function() {
            var arrOrders, div = document.createElement("div"), str, br = document.createElement("br"), p;
            if (this.readyState == 4 && this.status == 200) {
                try {
                    arrOrders = JSON.parse(this.responseText);

                    for (var i = 0; i < arrOrders.length; i++) {
                        p = document.createElement("p");
                        str = "Имя заказчика: " + arrOrders[i].name + ", Адресс доставки: " + arrOrders[i].adress 
                          + ", Телефон: " + arrOrders[i].telephone + ", Заказ: " + arrOrders[i].order + ".";
                        p.innerHTML = str;
                        div.appendChild(p);
                        div.appendChild(br);
                    }
                    document.getElementById("section2").appendChild(div);
                } catch (e) {
                    p = document.createElement("p");
                    p.innerHTML = "На данный момент не оформлено ни одного заказа.";
                    document.getElementById("section2").appendChild(p);
                }    
            }
        };

        xmlhttp.open("GET", window.location.href + "/orders.json", true);
        xmlhttp.send();
    });
})();
