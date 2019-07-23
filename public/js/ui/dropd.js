var ui;
(function (ui) {
    let drop;
    (function (drop) {
        function crea() {
            var data = ["opcion1", "opcion2", "opcion", "opcion4"];
            let gDrop = this;
            gDrop.classed("drop", true).append("g");
            //   let tab = gDrop
            //     .append("rect")
            //     .attr("width", 100)
            //     .attr("height", 60)
            //     .attr("fill", colors.naranja);
            var select = d3.select(".drop");
            select
                .append("g")
                .append("select")
                .attr("class", "select")
                .on("change", onchange);
            var options = select
                .selectAll("option")
                .data(data)
                .enter()
                .append("option")
                .text(function (d) {
                return d;
            });
            function onchange() {
                let selectValue = d3.select("select").property("value");
                d3.select("body")
                    .append("p")
                    .text(selectValue + " is the last selected option.");
            }
        }
        drop.crea = crea;
    })(drop = ui.drop || (ui.drop = {}));
})(ui || (ui = {}));
d3.selection.prototype.drop = ui.drop.crea;
//# sourceMappingURL=dropd.js.map