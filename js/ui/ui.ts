namespace ui {
  export var svg_main: d3.Selection<any, any, any, any>;
  export function ini() {
    let height_windows = (window.innerHeight / window.innerWidth) * 1000;

    svg_main = d3
      .select("body")
      .append("svg")
      .style("position", "absolute")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("viewBox", "0 0 400 100")
      .attr("preserveAspectRatio", "xMinYMin meet");
    svg_main
      .append("rect")
      .attr("height", height_windows)
      .attr("width", 1000)
      .attr("fill", "white");
    let diaog = svg_main.append("g");
    let insBton = svg_main
      .append("g")
      .attr("transform", "translate(70,470)")
      .classed("boton", true)
      .on("click", function () {
        let val = (<HTMLInputElement>document.getElementById("msg")).value;

        diaog
          .attr("transform", "translate(45, 450)")
          .property("text", val)
          .dialogs();
      })
      //texto del boton, color borde, color del boton
      .boton("Boton", "green", colors.gris);
    let toast = svg_main.append("g");
    let sboton = svg_main
      .append("g")
      .attr("transform", "translate(230,470)")
      .on("click", function () {
        toast
          .attr("transform", "translate(45,610)")
          .property("text", "El primer Switch esta en: " + swi.valswitch())
          .toast();
        console.log(swi.valswitch())
      })
      .boton("Boton", "green", colors.verde);

    let rect = svg_main
      .append("g")
      .attr("transform", "translate(5,310)")
      .cajaTexto("msg");

    // let textd = svg_main
    //   .append("g")
    //   .property("id", "x")
    //   .attr("transform", "translate(320,150)")
    //   .textarea();

    let calen = svg_main.append("g");

    calen
      .attr("transform", "translate(210,310)")
      .style("pointer-events", "all")
      .attr("id", "calendario")
      .calendar();

    //let a = d3.select("id").property("value");

    let swi = svg_main.append("g");
    swi.classed("swi1", true);
    swi.attr("transform", "translate(250,520)").dswitch(70);
    swi.attr("id", "swi1");

    let swi2 = svg_main
      .append("g")
      .classed("swi2", true)
      .attr("transform", "translate(250, 560)");
    swi2.dswitch(70);

    let dro = svg_main.append("g");
    dro.attr("transform", "translate(150, 520)").drop();
    var checkbox = svg_main.append("g");
    checkbox
      .attr("transform", "translate(100,520)")
      .checkbox(30, colors.rojo, colors.negro);

    var checkbox1 = svg_main.append("g");
    checkbox1
      .attr("transform", "translate(100,560)")
      .checkbox(30, colors.verde, colors.negro);

    var radiob = svg_main.append("g");
    radiob.attr("transform", "translate(50, 520)").RadioButton(30);

    var radiob2 = svg_main.append("g");
    radiob2.attr("transform", "translate(50, 560)").RadioButton(30);

    let url = "public/js/data/actual.json";
    let parametro = "nombre";

    let drop = svg_main.append("g");
    drop.attr("transform", "translate(20,10)").dropdown(url, parametro);
  }
}
