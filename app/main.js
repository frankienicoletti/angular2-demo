System.register(['angular2/platform/browser', './components/app.component'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
// ES6 - multiline strings, modules & importing
// TypeScript - "this keyword" & view js compiled code, strongly typed
// Angular 2 - html syntax including event handlers and dom events
//# sourceMappingURL=main.js.map