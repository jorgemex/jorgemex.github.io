namespace ui {
    export namespace alignment {

        export function ini() {
            d3.selection.prototype.alignment = alignment;
            d3.selection.prototype.alignmentValue = alignmentValue;
            d3.selection.prototype.alignmentAttr = alignmentAttr;
        }

        function alignmentValue() {
            return (this as d3.Selection<any, any, any, any>).property("ali");
        }

        function alignment(position: string) {
            let _re = this as d3.Selection<any, any, any, any>;
            if (arguments.length < 1) {
                _re.each(function () {
                    let _item = d3.select(this);
                    _item.alignment(_item.property("ali"));
                });
            } else {
                _re.property("ali", position);
                let _sc = 1;
                let _gh = (_re.node() as SVGAElement);
                let _gp = _gh.parentElement;
                let _a = (_gp as any).getBBox() as SVGRect;
                let _b = (_gh as any).getBBox() as SVGRect;
                console.log(_a);
                console.log(_b);

                if (typeof (_re.property("ascale")) === "undefined") {
                    _sc = 1;
                } else {
                    _sc = _re.property("ascale");
                    console.log("mi escala es " + _sc);
                }

                switch (position) {
                    case "cc": {
                        _gh.setAttribute("transform", "translate(" + ((_a.width - (_b.width * _sc)) / 2) + "," + ((_a.height - (_b.height * _sc)) / 2) + ") scale(" + _sc + ")");
                        break;
                    }
                    case "no": {
                        _gh.setAttribute("transform", "translate(0,0) scale(" + _sc + ")");
                        break;
                    }
                    case "nn": {
                        _gh.setAttribute("transform", "translate(" + ((_a.width - (_b.width * _sc)) / 2) + ",0) scale(" + _sc + ")");
                        break;
                    }
                    case "ne": {
                        _gh.setAttribute("transform", "translate(" + ((_a.width - (_b.width * _sc))) + ",0) scale(" + _sc + ")");
                        break;
                    }
                    case "ee": {
                        _gh.setAttribute("transform", "translate(" + ((_a.width - (_b.width * _sc))) + "," + ((_a.height - (_b.height * _sc)) / 2) + ") scale(" + _sc + ")");
                        break;
                    }
                    case "se": {
                        _gh.setAttribute("transform", "translate(" + ((_a.width - (_b.width * _sc))) + "," + ((_a.height - (_b.height * _sc))) + ") scale(" + _sc + ")");
                        break;
                    }
                    case "ss": {
                        _gh.setAttribute("transform", "translate(" + (_a.width - (_b.width * _sc)) / 2 + "," + (_a.height - (_b.height * _sc)) + ") scale(" + _sc + ")");
                        break;
                    }
                    case "so": {
                        _gh.setAttribute("transform", "translate(0," + (_a.height - (_b.height * _sc)) + ") scale(" + _sc + ")");
                        break;
                    }
                    case "oo": {
                        _gh.setAttribute("transform", "translate(0," + (_a.height - (_b.height * _sc)) / 2 + ") scale(" + _sc + ")");
                        break;
                    }
                    default: {
                        _gh.setAttribute("transform", "translate(0,0) scale(1)");
                        break;
                    }
                }
            }
        }

        function alignmentAttr(attribute: string, value: string) {
            let _item = this as d3.Selection<any, any, any, any>;
            if (attribute == "ascale") {
                _item.property("ascale", value);
                _item.alignment();
            }
        }
    }
}