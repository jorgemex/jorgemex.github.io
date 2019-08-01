var ui;
(function (ui) {
    let toast;
    (function (toast) {
        function crea() {
            var gDialog = this;
            gDialog.classed("gdialog", true);
            let width = 300;
            let height = 50;
            let text;
            let rect = gDialog.append("g");
            if (gDialog.property("text") !== undefined) {
                text = gDialog.property("text");
            }
            rect
                .append("rect")
                .transition()
                .duration(300)
                .attr("width", width)
                .attr("height", height)
                .attr("ry", 20)
                .attr("fill", "#262626")
                .style("stroke-width", 0.1)
                .style("stroke", 2)
                .style("opacity", "0.6");
            rect
                .append("text")
                .transition()
                .duration(450)
                .text(text)
                .attr("fill", ui.colors.blanco)
                .attr("x", width / 8)
                .attr("y", height / 1.8);
            setInterval(function () {
                rect
                    .transition()
                    .duration(2000)
                    .style("opacity", 0)
                    .remove();
            }, 2700);
        }
        toast.crea = crea;
    })(toast = ui.toast || (ui.toast = {}));
})(ui || (ui = {}));
d3.selection.prototype.toast = ui.toast.crea;
//# sourceMappingURL=toast.js.map