(function () {
    var current_language_prefix = document.querySelector("html").getAttribute("data-path-prefix");

    // Radio button
    var radioDoms = document.querySelectorAll('.mdc-radio');
    var radios = [];
    for (var i = 0, radioDom; radioDom = radioDoms[i]; i++) {
        radios[i] = new mdc.radio.MDCRadio(radioDom);
    }

    // Dialog
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#dialog-language-trigger'));
    dialog.listen('MDCDialog:accept', function () {
        for (var i = 0, radio; radio = radios[i]; i++) {
            var prefix = radioDoms[i].getAttribute("data-path-prefix");
            if (prefix === current_language_prefix) {
                continue;
            }
            if (radio.checked) {
                changeLanguage(prefix)
            }
        }
    });
    document.querySelector('#language-trigger').addEventListener('click', function (evt) {
        evt.preventDefault();
        dialog.lastFocusedTarget = evt.target;
        for (var i = 0, radio; radio = radios[i]; i++) {
            radio.checked = radioDoms[i].getAttribute("data-path-prefix") === current_language_prefix;
        }
        dialog.show();
    });

    function changeLanguage(prefix) {
        window.location.pathname = prefix + window.location.pathname.substring(current_language_prefix.length);
    }
})();