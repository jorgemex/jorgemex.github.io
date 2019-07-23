namespace ui {
  export namespace RadioButton {
    export function crea(size: any) {
      let gRadioB = this as d3.Selection<any, any, any, any>;
      gRadioB.property("value", false);
      let x = 0,
        y = 0,
        rx = size / 2 + 5,
        ry = size / 2 + 5,
        markStrokeWidth = 3,
        boxStrokewidth = size / 20,
        checked = false,
        clickEvent;

      var g = gRadioB.append("g"),
        box = g
          .append("rect")
          .attr("width", size)
          .attr("height", size)
          .attr("x", x)
          .attr("y", y)
          .attr("rx", rx)
          .attr("ry", ry)
          .style("fill-opacity", 0)
          .style("stroke-width", boxStrokewidth)
          .style("stroke", "black");

      var mark = g
        .append("circle")
        .attr("r", size / 3)
        .style("stroke-width", markStrokeWidth)
        .style("stroke", "black")
        .attr("fill", "black")
        .attr("cx", size / 2)
        .attr("cy", size / 2)
        .style("opacity", checked ? 1 : 0);

      g.on("click", () => {
        checked = !checked;
        mark.style("opacity", checked ? 1 : 0);
        gRadioB.property("value", checked);
        if (clickEvent) clickEvent();
        d3.event.stopPropagation();
      });
      return crea;
    }
    export function valRadioButton() {
      let valor = this as d3.Selection<any, any, any, any>;
      return valor.property("value");
    }
  }
}
d3.selection.prototype.RadioButton = ui.RadioButton.crea;
d3.selection.prototype.valRadioButton = ui.RadioButton.valRadioButton;
