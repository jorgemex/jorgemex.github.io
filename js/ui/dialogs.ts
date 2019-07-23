namespace ui {
  export namespace dialogs {
    export function crea() {
      var gDialog = this as d3.Selection<any, any, any, any>;
      gDialog.classed("gdialog", true);
      let width = 315;
      let height = 150;
      let text;

      let rect = gDialog.append("g");
      if (gDialog.property("text") !== undefined) {
        text = gDialog.property("text");
      }

      rect
        .append("rect")
        .transition()
        .duration(500)
        .attr("width", width)
        .attr("height", height)
        .attr("ry", 10)
        .attr("fill", "#262626")
        .style("stroke-width", 0.1)
        .style("stroke", 2);
      rect
        .append("text")
        .transition()
        .duration(500)
        .text(text)
        .attr("fill", colors.blanco)
        .attr("x", width / 2.5)
        .attr("y", height / 2);
      let boton1 = rect.append("g").on("click", function() {
        rect.remove();
      });
      boton1
        .append("rect")
        .transition()
        .duration(500)
        .attr("width", width / 2)
        .attr("height", height / 3)
        .attr("fill", "#262626")
        .attr("rx", 0)
        .attr("ry", 5)
        .attr("x", 0)
        .attr("y", 100)
        .style("stroke-width", 0.1)
        .style("stroke", "white");
      boton1
        .append("text")
        .transition()
        .duration(500)
        .text("Cancelar")
        .attr("fill", "white")
        .attr("x", 50)
        .attr("y", 125);
      let boton2 = rect.append("g").on("click", function() {
        rect.remove();
      });
      boton2
        .append("rect")
        .transition()
        .duration(500)
        .attr("width", width / 2)
        .attr("height", height / 3)
        .attr("fill", "#262626")
        .attr("rx", 0)
        .attr("ry", 5)
        .attr("x", 158)
        .attr("y", 100)
        .style("stroke-width", 0.1)
        .style("stroke-opacity", 10)
        .style("fill-opacity", 100)
        .style("stroke", "#d3d3d3");
      boton2
        .append("text")
        .transition()
        .duration(500)
        .text("Aceptar")
        .attr("fill", "white")
        .attr("x", 210)
        .attr("y", 125);
    }
  }
}
d3.selection.prototype.dialogs = ui.dialogs.crea;
