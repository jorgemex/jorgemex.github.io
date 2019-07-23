var ui;
(function (ui) {
    let texatarea;
    (function (texatarea) {
        let rect;
        let id;
        function crea() {
            let gCajatexto = this;
            gCajatexto.classed("gtextarea", true);
            if (gCajatexto.property("id") !== undefined) {
                id = gCajatexto.property("id");
            }
            let textarea = '<textarea rows="18" cols="30" style="margin: 0px; width: 200px; height: 140px;">TEXTAREA</textarea>';
            rect = gCajatexto.append("g");
            rect
                .append("foreignObject")
                .attr("id", id)
                .attr("width", 200)
                .attr("height", 140)
                .html(textarea);
        }
        texatarea.crea = crea;
    })(texatarea = ui.texatarea || (ui.texatarea = {}));
})(ui || (ui = {}));
d3.selection.prototype.textarea = ui.texatarea.crea;
//# sourceMappingURL=textarea.js.map