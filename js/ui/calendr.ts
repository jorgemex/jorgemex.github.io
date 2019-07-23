namespace ui {
  export namespace controls {
    export function ini() {}

    export function calendarValue() {
      let element = this as d3.Selection<any, any, any, any>;
      return new Date(element.property("date"));
    }

    export function calendar() {
      let element = this as d3.Selection<any, any, any, any>;
      let fActual = new Date();
      let month: number;
      let years: number;
      let gBar;
      let gCont;
      if (element.property("years") == null) {
        let day: number;
        element.classed("calendar", true);
        month = fActual.getMonth() + 1;
        years = fActual.getFullYear();
        day = fActual.getDate();
        gBar = element
          .append("g")
          .classed("calendar-bar", true)
          .on("click", ShowHide)
          .property("ShowHide", true)
          .style("cursor", "default");
        gBar
          .append("rect")
          .attr("width", 170)
          .attr("height", 25)
          .attr("fill", "#2E2E2E")
          .attr("stroke", "black")
          .attr("ry", 5);
        let gboton = gBar
          .append("g")
          .classed("calendar-bar-button", true)
          .attr("transform", "translate(118,4)");

        let gText = gBar
          .append("g")
          .classed("calendar-bar-text", true)
          .attr("transform", "translate(35,18)");
        gText
          .append("text")
          .attr("id", "calendar-bar-text")
          .text(
            (day.toString().length < 2 ? "0" + day : day) +
              "/" +
              (month.toString().length < 2 ? "0" + month.toString() : month) +
              "/" +
              years
          )
          .attr("fill", "#FFF");
        element.property(
          "value",
          (day.toString().length < 2 ? "0" + day : day) +
            "/" +
            (month.toString().length < 2 ? "0" + month.toString() : month) +
            "/" +
            years
        );
        element.property(
          "date",
          years +
            "-" +
            (month.toString().length < 2 ? "0" + month.toString() : month) +
            "-" +
            (day.toString().length < 2 ? "0" + day : day) +
            " 00:00:00"
        );
        month = month - 1;
        element.property("month", month);
        element.property("years", years);
      }

      function ShowHide() {
        let tBar = element.select(".calendar-bar");
        if (tBar.property("ShowHide")) {
          gCont = element
            .append("g")
            .classed("calendar-container", true)
            .attr("transform", "translate(0,25)");
          gCont
            .append("rect")
            .attr("width", 170)
            .attr("height", 130)
            .attr("fill", "#262626")
            .attr("stroke", "black")
            .attr("ry", 5);
          tBar.property("ShowHide", false);
          go();
        } else {
          element.select("#calendar-bar-text").text(element.property("value"));
          tBar.property("ShowHide", true);
          gCont.remove();
        }
      }

      function go() {
        fActual = new Date(element.property("date"));
        month = element.property("month");
        years = element.property("years");
        let week = ["D", "L", "M", "M", "J", "V", "S"];
        let months = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ];
        element.select("#calendar-bar-text").text(months[month] + " " + years);
        let _gbtn1 = gCont
          .append("g")
          .classed("calendar-container-back", true)
          .attr("transform", "translate(3,-20)")
          .on("click", () => {
            if (month == 0) {
              years--;
              month = 11;
            } else {
              month--;
            }
            element.property("month", month);
            element.property("years", years);
            ShowHide();
            ShowHide();
          })
          .style("cursor", "default");

        //_gbtn1.append("text").text("<").attr("font-size", 10).attr("font-family", "serif").attr("font-family", "Helvetica").attr("fill", "#000").attr("font-weight", "bold");
        _gbtn1
          .append("image")
          .attr("xlink:href", "images/right-back.png")
          .attr("width", "16px")
          .attr("height", "16px")
          .style("cursor", "pointer");
        let _gbtn2 = gCont
          .append("g")
          .classed("calendar-container-next", true)
          .attr("transform", "translate(150,-20)")
          .on("click", () => {
            if (month == 11) {
              years++;
              month = 0;
            } else {
              month++;
            }
            element.property("month", month);
            element.property("years", years);
            ShowHide();
            ShowHide();
          })
          .style("cursor", "default");
        // _gbtn2.append("text").text(">").attr("font-size", 10).attr("font-family", "serif").attr("font-family", "Helvetica").attr("fill", "#000").attr("font-weight", "bold");
        _gbtn2
          .append("image")
          .attr("xlink:href", "images/right-next.png")
          .attr("width", "16px")
          .attr("height", "16px")
          .style("cursor", "pointer");

        let _gContenido = gCont
          .append("g")
          .attr("transform", "translate(10,5)");
        let desplace: number = 18;
        for (let x = 0; x < week.length; x++) {
          let _gContenido = gCont
            .append("g")
            .attr("transform", "translate(" + desplace + ",5)")
            .style("cursor", "default");
          _gContenido
            .append("text")
            .attr("y", 15)
            .text(week[x])
            .attr("font-size", 10)
            .attr("font-family", "serif")
            .attr("fill", "white")

            .attr("x", 7);
          desplace += 18.5;
        }
        let dat: number = 1;
        let maximum = new Date(years, month + 1, 0).getDate();
        let initial = new Date(years, month, dat).getDay();
        let x: number = 18;
        let y: number = 22.1;
        for (let m = 0; m < 37; m++) {
          if (initial == 7) {
            initial = 0;
            x = 18;
            y = y + 17.1;
          }
          if (m >= initial && dat <= maximum) {
            let da: string = dat.toString();
            let _gContenido = gCont
              .append("g")
              .attr("transform", "translate(" + x + "," + y + ")")
              .on("click", function() {
                element.property("month", month);
                element.property("years", years);
                month++;
                element.property(
                  "date",
                  years +
                    "-" +
                    (month.toString().length < 2
                      ? "0" + month.toString()
                      : month) +
                    "-" +
                    (da.toString().length < 2 ? "0" + da : da) +
                    " 00:00:00"
                );
                element.property(
                  "value",
                  (da.length < 2 ? "0" + da : da) +
                    "/" +
                    (month.toString().length < 2
                      ? "0" + month.toString()
                      : month) +
                    "/" +
                    years
                );
                ShowHide();
              })
              .style("cursor", "pointer");
            _gContenido
              .append("rect")
              .attr("width", 18.5)
              .attr("height", 17.1)
              .attr("fill", "#262626");
            _gContenido
              .on("mouseover", function() {
                _gContenido
                  .select("rect")
                  .attr("fill", "green")
                  .attr("ry", 15)
                  .attr("rx", 10);
              })
              .on("mouseout", function() {
                _gContenido.select("rect").attr("fill", "#262626");
              });
            if (
              dat == fActual.getDate() &&
              month == fActual.getMonth() &&
              years == fActual.getFullYear()
            ) {
              _gContenido
                .append("circle")
                .attr("r", 8)
                .attr("cx", 9.25)
                .attr("cy", 8.55)
                .attr("fill", "#1a73e8");
            }
            _gContenido
              .append("text")
              .attr("y", 12)
              .text(dat.toString().length < 2 ? "0" + da : da)
              .attr("font-size", 10)
              .attr("font-family", "serif")
              .attr("fill", "white")
              .attr("x", 4);
            initial++;
            dat++;
            x = x + 18.5;
          } else {
            x = x + 18.5;
          }
        }
      }
    }
  }
}
d3.selection.prototype.calendarValue = ui.controls.calendarValue;
d3.selection.prototype.calendar = ui.controls.calendar;
