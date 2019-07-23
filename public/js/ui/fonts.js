var ui;
(function (ui) {
    let fonts;
    (function (fonts) {
        fonts.fntTitulo = {
            family: "Arial",
            size: 20
        };
        fonts.fntEncabezado15 = {
            family: "Arial",
            weight: "bold",
            size: 15
        };
        fonts.fntEncabezado = {
            family: "Arial",
            weight: "bold",
            size: 12
        };
        fonts.fntInfo = {
            family: "Arial",
            size: 14
        };
        fonts.fntInfoC = {
            family: "Arial",
            size: 12
        };
        fonts.fntNotificacion = {
            family: "Arial",
            size: 10
        };
        fonts.fntMovilApp = {
            family: "Arial",
            weight: "bold",
            size: 40
        };
        fonts.fntMovilInfo = {
            family: "Arial",
            size: 40
        };
        fonts.fntMovilHeadersEstacion = {
            family: "Arial",
            weight: "bold",
            size: 65
        };
        fonts.fntMovilRowsEst = {
            family: "Arial",
            weight: "bold",
            size: 60
        };
        function applyFont(_fuente) {
            const _sel = this;
            _fuente.family && _sel.attr("font-family", _fuente.family);
            _fuente.size && _sel.attr("font-size", _fuente.size);
            _fuente.tlength && _sel.attr("textLength", _fuente.tlength);
            _fuente.letterSpacing && _sel.attr("letter-spacing", _fuente.letterSpacing);
            _fuente.weight && _sel.attr("font-weight", _fuente.weight);
            return _sel;
        }
        fonts.applyFont = applyFont;
    })(fonts = ui.fonts || (ui.fonts = {}));
})(ui || (ui = {}));
d3.selection.prototype.applyFont = ui.fonts.applyFont;
//# sourceMappingURL=fonts.js.map