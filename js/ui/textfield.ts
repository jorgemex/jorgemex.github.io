namespace ui {
  export namespace textfield {
    let rect;
    // export function textFValue() {
    //   let val = (<HTMLInputElement>document.getElementById("")).value;
    //   return alert(val);
    // }

    export function func(id: string) {
      let gCajatexto = this as d3.Selection<any, any, any, any>;
      gCajatexto.classed("gctexto", true);
      let a = id;

      if (gCajatexto.property("id") !== undefined) {
        id = gCajatexto.property("id");
      }

      rect = gCajatexto.append("g");
      rect
        .append("foreignObject")
        .attr("x", "0")
        .attr("y", "0")
        .attr("width", 180)
        .attr("height", 30)
        //
        .html(
          ' <input type="text" id="' + a + '" name="FirstName" value="Mickey">'
        );
    }
  }
}
d3.selection.prototype.cajaTexto = ui.textfield.func;
//d3.selection.prototype.textfieldvalue = ui.textfield.textFValue;
