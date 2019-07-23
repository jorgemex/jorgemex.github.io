var ui;
(function (ui) {
    let alignment;
    (function (alignment_1) {
        function ini() {
            d3.selection.prototype.alignment = alignment;
            d3.selection.prototype.alignmentValue = alignmentValue;
            d3.selection.prototype.alignmentAttr = alignmentAttr;
        }
        alignment_1.ini = ini;
        function alignmentValue() {
            return this.property("ali");
        }
        function alignment(position) {
            let _re = this;
            if (arguments.length < 1) {
                _re.each(function () {
                    let _item = d3.select(this);
                    _item.alignment(_item.property("ali"));
                });
            }
            else {
                _re.property("ali", position);
                let _sc = 1;
                let _gh = _re.node();
                let _gp = _gh.parentElement;
                let _a = _gp.getBBox();
                let _b = _gh.getBBox();
                console.log(_a);
                console.log(_b);
                if (typeof (_re.property("ascale")) === "undefined") {
                    _sc = 1;
                }
                else {
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
        function alignmentAttr(attribute, value) {
            let _item = this;
            if (attribute == "ascale") {
                _item.property("ascale", value);
                _item.alignment();
            }
        }
    })(alignment = ui.alignment || (ui.alignment = {}));
})(ui || (ui = {}));
//# sourceMappingURL=alignments.js.map