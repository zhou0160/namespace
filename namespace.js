var ZHOU0160 = {
    init: function init() {
        let Div = document.createElement("div");
        Div.className = "box";
        Div.textContent = "zhou0160";
        document.getElementById("boxes").appendChild(Div);

        Div.addEventListener("click", ZHOU0160.circleClick);
        Div.addEventListener("mouseover", ZHOU0160.mouseOver);
        Div.addEventListener("mouseout", ZHOU0160.mouseOut);
    },

    circleClick: function () {
        this.style.borderColor = "#53e6c2";
        this.style.backgroundColor = "#ea9492";
        document.querySelector("div").textContent = "Thanks for clicking me!! ";
    },

    mouseOver: function (e) {
        e.target.classList.toggle("highlight");
    },

    mouseOut: function (e) {
        e.target.classList.toggle("highlight");
        e.target.removeAttribute('style');
    }
};

  
