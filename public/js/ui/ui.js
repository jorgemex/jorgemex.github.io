var ui;
(function (ui) {
    function ini() {
        let height_windows = (window.innerHeight / window.innerWidth) * 1000;
        ui.svg_main = d3
            .select("body")
            .append("svg")
            .style("position", "absolute")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", "0 0 400 100")
            .attr("preserveAspectRatio", "xMinYMin meet");
        ui.svg_main
            .append("rect")
            .attr("height", height_windows)
            .attr("width", 1000)
            .attr("fill", "white");
        let diaog = ui.svg_main.append("g");
        let insBton = ui.svg_main
            .append("g")
            .attr("transform", "translate(70,320)")
            .classed("boton", true)
            .on("click", function () {
            let val = document.getElementById("msg").value;
            diaog
                .attr("transform", "translate(45,450)")
                .property("text", val)
                .dialogs();
        })
            .boton("Boton", "green", ui.colors.verde);
        let sboton = ui.svg_main
            .append("g")
            .attr("transform", "translate(230,320)")
            .on("click", function () {
            let sw1 = swi.valswitch();
            let sw2 = swi2.valswitch();
            let ch = checkbox.property("value");
            let ch2 = checkbox1.property("value");
            console.log("sw1", swi.property("value"));
            console.log("sw2", swi2.property("value"));
            console.log("check", ch);
            console.log("check2", ch2);
            console.log("radio ", radiob.valRadioButton());
            console.log("radio 2 ", radiob2.valRadioButton());
            // if (sw1 == true) {
            //   console.log("entro a true");
            // } else {
            //   console.log("val esta en: " + sw1);
            // }
        })
            .boton("input", "green", ui.colors.naranja);
        let rect = ui.svg_main
            .append("g")
            .attr("transform", "translate(5,10)")
            .cajaTexto("msg");
        // let textd = svg_main
        //   .append("g")
        //   .property("id", "x")
        //   .attr("transform", "translate(320,150)")
        //   .textarea();
        let calen = ui.svg_main.append("g");
        calen
            .attr("transform", "translate(200,10)")
            .style("pointer-events", "all")
            .attr("id", "calendario")
            .calendar();
        //let a = d3.select("id").property("value");
        let swi = ui.svg_main.append("g");
        swi.classed("swi1", true);
        swi.attr("transform", "translate(150,450)").dswitch(70);
        swi.attr("id", "swi1");
        let swi2 = ui.svg_main
            .append("g")
            .classed("swi2", true)
            .attr("transform", "translate(150, 500)");
        swi2.dswitch(70);
        let dro = ui.svg_main.append("g");
        dro.attr("transform", "translate(150, 520)");
        dro.drop();
        var checkbox = ui.svg_main.append("g");
        checkbox.attr("transform", "translate(50,450)").checkbox(30);
        var checkbox1 = ui.svg_main.append("g");
        checkbox1.attr("transform", "translate(50,490)").checkbox(30);
        var radiob = ui.svg_main.append("g");
        radiob.attr("transform", "translate(50, 540)").RadioButton(30);
        var radiob2 = ui.svg_main.append("g");
        radiob2.attr("transform", "translate(50, 580)").RadioButton(30);
        let url = "js/data/actual.json";
        let parametro = "nombre";
        let drop = ui.svg_main.append("g");
        drop.attr("transform", "translate(20,50)").dropdown(url, parametro);
    }
    ui.ini = ini;
})(ui || (ui = {}));
//# sourceMappingURL=ui.js.map