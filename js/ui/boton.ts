namespace ui {
  export namespace boton {
    export function crea(texto: any, borde: any, color: any) {
      let gboton = this as d3.Selection<any, any, any, any>;
      let alto = 30;
      let ancho = 150;
      gboton.classed("boton", true).style("pointer-events", "all");

      let rect = gboton
        .append("rect")
        .attr("height", 40)
        .attr("width", 120)
        .attr("fill", color)
        .attr("ry", 2)
        .style("stroke-width", 0.1)
        .style("stroke", borde);

      gboton
        .append("text")
        .attr("x", ancho / 4)
        .attr("y", alto / 1.3)
        .applyFont(fonts.fntEncabezado15)
        .text(texto);
      //gboton.alignment();
      return gboton;
    }
  }
}

d3.selection.prototype.boton = ui.boton.crea;

// .on("mouseover", function () {
//     rect.attr("fill", colors.naranja);
// })
// .on("mouseout", function () {
//     rect.attr("fill", colors.verde);
// });
