var ui;
(function (ui) {
    let checkbox;
    (function (checkbox) {
        function crea(size) {
            let gChecked = this;
            gChecked.property("value", false);
            let x = 0, y = 0, rx = size / 4, ry = size / 4, markStrokeWidth = 4, boxStrokeWidth = 2, checked = false, clickEvent;
            var g = gChecked.append("g"), box = g
                .append("rect")
                .attr("width", size)
                .attr("height", size)
                .attr("x", x)
                .attr("y", y)
                .attr("rx", rx)
                .attr("ry", ry)
                .style("fill-opacity", 0)
                .style("stroke-width", boxStrokeWidth)
                .style("stroke", "black");
            //Data to represent the check mark
            var coordinates = [
                { x: x + size / 4, y: y + size / 2 },
                { x: x + size / 2.5, y: y + size - size / 4 },
                { x: x + size - size / 8, y: y + size / 8 }
            ];
            var line = d3
                .line()
                .x(d => {
                return d.x;
            })
                .y(d => {
                return d.y;
            });
            var mark = g
                .append("path")
                .attr("d", line(coordinates))
                .style("stroke-width", markStrokeWidth)
                .style("stroke", "black")
                .style("fill", "none")
                .style("opacity", checked ? 1 : 0);
            g.on("click", () => {
                checked = !checked;
                mark.style("opacity", checked ? 1 : 0);
                gChecked.property("value", checked);
                if (clickEvent)
                    clickEvent();
                d3.event.stopPropagation();
            });
            return crea;
        }
        checkbox.crea = crea;
        function valCheckbox() {
            let valor = this;
            return valor.property("value");
        }
        checkbox.valCheckbox = valCheckbox;
    })(checkbox = ui.checkbox || (ui.checkbox = {}));
})(ui || (ui = {}));
d3.selection.prototype.checkbox = ui.checkbox.crea;
d3.selection.prototype.valCheckbox = ui.checkbox.valCheckbox;
//# sourceMappingURL=checkbox.js.map