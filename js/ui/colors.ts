namespace ui {
  export namespace colors {
    export const naranja = "#F28C28";
    export const rojo = "#ff5345";
    export const amarillo = "#f5bb2b ";
    export const verde = "#1bbf4c";
    export const blanco = "white";
    export const gris = "#d3d3d3";
  }
}

// let textfiel = sboton.append("g")
// textfiel.append("foreignObject")
//     .attr("x", "200")
//     .attr("y", "160")
//     .attr("width", 140)
//     .attr("height", 20)
//     .html(
//         '<input type="text" value="Text goes here" />');
// .attr("contentEditable", true).on("blur", function (d, i) { this; })
// .on("keyup", function (d) {
//     { d3.select(this).text(); }
//     console.log("keypress", d3.event)
// });
// var body = d3.select('.boton')
// body.append('input')
//     .attr('type', 'text')
//     .attr('name', 'textInput')
//     .attr('value', 'Text goes here')
//     .attr("transform", "translate(200,100)");

// var texts = ['foo', 'bar'];

// //var container = d3.select('g');
// let container = d3.select('g');
// container
//     .selectAll('text')
//     .data(texts)
//     .enter()
//     .append('text')
//     .text(function (d) { return d; })
//     .attr('y', function (d, i) { return 50 * i })
//     .on('click', function (d, i) {
//         container
//             .append("foreignObject")
//             .attr("x", 0)
//             .attr("y", function () { return 50 * i })
//             .attr("width", 140)
//             .attr("height", 20)
//             .html(function (d) {
//                 return '<input type="text" value="" />'
//             })
//     })
