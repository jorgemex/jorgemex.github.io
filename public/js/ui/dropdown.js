var ui;
(function (ui) {
    let dropdown;
    (function (dropdown) {
        function crea(url, parametro) {
            let dropdw = this;
            dropdw.classed("gdropdown", true);
            //multitouch
            /** */
            var dragScroll = d3
                .drag()
                .on("start", dragStart)
                .on("drag", dragMove);
            function dragStart() { }
            function dragMove() {
                let _ey = d3.event.y;
                let _gt = d3.select(this).node();
                //let _gp = _gt.parentNode.children.item(2);
                console.log("mensaje");
                _gt.setAttribute("transform", "translate(0," + _ey + ")");
                //_gp.setAttribute("transform", "translate(0," + (-1 * _ey + ")"));
                console.log("ey", _ey);
                //console.log(_gp);
            }
            /**
             *
             */
            let rect = dropdw.append("g");
            let _def = rect.append("defs");
            let _clip = _def.append("clipPath").attr("id", "clip-ventana");
            _clip
                .append("rect")
                .attr("width", 366)
                .attr("height", 356)
                .attr("x", 0)
                .attr("y", 0);
            dropdw.on("click", function () { });
            rect
                .classed("claro", true)
                .append("rect")
                .attr("clip-path", "url(#clip-ventana)")
                .attr("width", 360)
                .attr("height", 290)
                .attr("ry", 10)
                .attr("fill", "#262626")
                .attr("stroke-width", 1)
                .attr("stroke", "white");
            let info = rect.append("g");
            let def = info.append("defs");
            let clip = def.append("clipPath").attr("id", "clip-ventana2");
            clip
                .append("rect")
                .attr("width", 366)
                .attr("height", 256)
                .attr("x", 0)
                .attr("y", 0);
            d3.json(url).then(function (data) {
                var dats;
                let size = 50;
                for (var i = 0; i < data.length; i++) {
                    dats = data[i][parametro];
                    let re = info.append("g");
                    re.append("rect")
                        .attr("width", 340)
                        .attr("height", size)
                        .attr("fill", "none")
                        .attr("stroke-width", 0)
                        .attr("stroke", "green")
                        .attr("transform", "translate(10," + (size / 2.5 + i * 30) + ")");
                    let re2 = re.append("g");
                    re2
                        .attr("transform", "translate(13," + (size / 2 + i * 30) + ")")
                        .checkbox(20, ui.colors.amarillo, ui.colors.blanco);
                    let text = re.append("g");
                    text
                        .append("text")
                        .text(dats)
                        .attr("x", size / 1)
                        .attr("y", size / 1.4 + i * 30)
                        .style("fill", "white")
                        .style("font-size", "18")
                        // .on("touchstart", touch)
                        // .on("touchmove", touch)
                        // .on("touchend", touch)
                        .style("fotn-weight", "bold");
                }
            });
            //dragScroll(info);
            function getTrain() { }
        }
        dropdown.crea = crea;
    })(dropdown = ui.dropdown || (ui.dropdown = {}));
})(ui || (ui = {}));
d3.selection.prototype.dropdown = ui.dropdown.crea;
/**
 *       var zoomKey = false;
      var zoomer = d3
        .zoom()
        .scaleExtent([1 / 3, 1])
        .on("zoom", zoom)
        .filter(() => {
          return zoomKey || !(d3.event.type == "wheel");
        });
 *           info
            .call(zoomer)
            .on("wheel.zoom", null)
            .on("wheel", pan);
 *       function zoom() {
        info.attr("transform", d3.event.transform);
      }
      function pan() {
        zoomer.translateBy(
          info.transition().duration(800),
          d3.event.wheelDeltaX,
          d3.event.wheelDeltaY
        );
        console.log(this);
      }



    ////multi touch
     let circle = dropdw.selectAll("circle.touch");
      console.log("circle", circle);
      var color = d3.scaleOrdinal(d3.schemeCategory10);

      function touch() {
        d3.event.preventDefault();

        circle = circle.data(d3.touches(dropdw.node()), (d: any) => {
          return d.identifier;
        });

        circle
          .exit()
          .attr("class", null)
          .transition()
          .attr("r", 1e-6)
          .remove();

        circle
          .enter()
          .append("circle")
          .attr("class", "touch")
          .attr("r", 1e-6)
          .style("fill", (d: any) => {
            return color(d.identifier);
          })
          .transition()
          .duration(500)
          .ease(d3.easeElastic)
          .attr("r", 48);

        circle
          .attr("cx", function(d) {
            return d[0];
          })
          .attr("cy", function(d) {
            return d[1];
          });
      }
 */
//# sourceMappingURL=dropdown.js.map