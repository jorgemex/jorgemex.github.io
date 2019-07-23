var ui;
(function (ui) {
    let RadioButton;
    (function (RadioButton) {
        function crea(size) {
            let gRadioB = this;
            gRadioB.property("value", false);
            let x = 0, y = 0, rx = size / 2 + 5, ry = size / 2 + 5, markStrokeWidth = 3, boxStrokewidth = size / 20, checked = false, clickEvent;
            var g = gRadioB.append("g"), box = g
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
                if (clickEvent)
                    clickEvent();
                d3.event.stopPropagation();
            });
            return crea;
        }
        RadioButton.crea = crea;
        function valRadioButton() {
            let valor = this;
            return valor.property("value");
        }
        RadioButton.valRadioButton = valRadioButton;
    })(RadioButton = ui.RadioButton || (ui.RadioButton = {}));
})(ui || (ui = {}));
d3.selection.prototype.RadioButton = ui.RadioButton.crea;
d3.selection.prototype.valRadioButton = ui.RadioButton.valRadioButton;
//# sourceMappingURL=RadioButton.js.map