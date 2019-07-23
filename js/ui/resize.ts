namespace ui {
    //Razón de altura ancho 
    var ratio: number = 2;
    export function resize() {
        ratio = window.innerHeight / window.innerWidth * 1000;
        d3.selectAll(".bottom").each(bottom_aling);
        d3.selectAll(".center").each(center_alingn);
    }
    //Función para alinear los objetos hacia abajo:
    function bottom_aling() {
        let _g = d3.select(this);
        _g.attr("y", ratio - +_g.attr("height"));
    }
    //Función para alinear los objeros hacia el centro vertical:
    function center_alingn() {
        let _g = d3.select(this);
        _g.attr("y", (ratio - +_g.attr("height")) / 2);
    }
}