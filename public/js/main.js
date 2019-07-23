var main;
(function (main) {
    main.appName = "Intro";
    main.Vernumber = "0.1.0";
    function ini() {
        console.log("iniciando", main.appName, main.Vernumber);
        ui.alignment.ini();
        ui.ini();
    }
    main.ini = ini;
})(main || (main = {}));
//# sourceMappingURL=main.js.map