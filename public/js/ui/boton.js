var ui;
(function (ui) {
    let boton;
    (function (boton) {
        function crea(texto, borde, color) {
            let gboton = this;
            let alto = 30;
            let ancho = 150;
            gboton.classed("boton", true).style("pointer-events", "all");
            let rect = gboton
                .append("rect")
                .attr("height", 40)
                .attr("width", 120)
                .attr("fill", color)
                .attr("ry", 2)
                .style("stroke-width", 0.1)
                .style("stroke", borde);
            gboton
                .append("text")
                .attr("x", ancho / 4)
                .attr("y", alto / 1.3)
                .applyFont(ui.fonts.fntEncabezado15)
                .text(texto);
            //gboton.alignment();
            return gboton;
        }
        boton.crea = crea;
    })(boton = ui.boton || (ui.boton = {}));
})(ui || (ui = {}));
d3.selection.prototype.boton = ui.boton.crea;
// .on("mouseover", function () {
//     rect.attr("fill", colors.naranja);
// })
// .on("mouseout", function () {
//     rect.attr("fill", colors.verde);
// });
//# sourceMappingURL=boton.js.map