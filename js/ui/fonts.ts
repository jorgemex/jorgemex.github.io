namespace ui {
    export namespace fonts {
        export interface fuente {
            family: string,
            size: number,
            tlength?: number,
            letterSpacing?: number,
            weight?: string
        }
        export const fntTitulo: fuente =
        {
            family: "Arial",
            size: 20
        }
        export const fntEncabezado15: fuente =
        {
            family: "Arial",
            weight: "bold",
            size: 15
        }
        export const fntEncabezado: fuente =
        {
            family: "Arial",
            weight: "bold",
            size: 12
        }
        export const fntInfo: fuente =
        {
            family: "Arial",

            size: 14
        }
        export const fntInfoC: fuente =
        {
            family: "Arial",

            size: 12
        }
        export const fntNotificacion: fuente = {
            family: "Arial",
            size: 10
        }
        export const fntMovilApp: fuente = {
            family: "Arial",
            weight: "bold",
            size: 40
        }
        export const fntMovilInfo: fuente = {
            family: "Arial",
            size: 40
        }

        export const fntMovilHeadersEstacion: fuente = {
            family: "Arial",
            weight: "bold",
            size: 65
        }
        export const fntMovilRowsEst: fuente = {
            family: "Arial",
            weight: "bold",
            size: 60
        }
        export function applyFont(_fuente: fuente) {
            const _sel = this as d3.Selection<any, any, any, any>;
            _fuente.family && _sel.attr("font-family", _fuente.family);
            _fuente.size && _sel.attr("font-size", _fuente.size);
            _fuente.tlength && _sel.attr("textLength", _fuente.tlength);
            _fuente.letterSpacing && _sel.attr("letter-spacing", _fuente.letterSpacing);
            _fuente.weight && _sel.attr("font-weight", _fuente.weight);
            return _sel;
        }

    }
}
d3.selection.prototype.applyFont = ui.fonts.applyFont;