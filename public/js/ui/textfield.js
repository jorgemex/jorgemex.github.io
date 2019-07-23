var ui;
(function (ui) {
    let textfield;
    (function (textfield) {
        let rect;
        // export function textFValue() {
        //   let val = (<HTMLInputElement>document.getElementById("")).value;
        //   return alert(val);
        // }
        function func(id) {
            let gCajatexto = this;
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
                .html(' <input type="text" id="' + a + '" name="FirstName" value="Mickey">');
        }
        textfield.func = func;
    })(textfield = ui.textfield || (ui.textfield = {}));
})(ui || (ui = {}));
d3.selection.prototype.cajaTexto = ui.textfield.func;
//d3.selection.prototype.textfieldvalue = ui.textfield.textFValue;
//# sourceMappingURL=textfield.js.map