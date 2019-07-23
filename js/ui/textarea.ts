namespace ui {
  export namespace texatarea {
    let rect;
    let id: string;
    export function crea() {
      let gCajatexto = this as d3.Selection<any, any, any, any>;
      gCajatexto.classed("gtextarea", true);

      if (gCajatexto.property("id") !== undefined) {
        id = gCajatexto.property("id");
      }

      let textarea =
        '<textarea rows="18" cols="30" style="margin: 0px; width: 200px; height: 140px;">TEXTAREA</textarea>';
      rect = gCajatexto.append("g");
      rect
        .append("foreignObject")
        .attr("id", id)
        .attr("width", 200)
        .attr("height", 140)
        //
        .html(textarea);
    }
  }
}
d3.selection.prototype.textarea = ui.texatarea.crea;
