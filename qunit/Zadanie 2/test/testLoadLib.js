QUnit.module('LoadLibTest', function() {
	QUnit.test('Ponowne ładowanie tego samego pliku CSS', function(assert) {
		loadLib("./src/style.css", "css");
		loadLib("./src/style.css", "css");
		assert.equal(document.querySelectorAll('[href="./src/style.css"]').length, 2, "CSS został dodany dwukrotnie");
	});
    QUnit.test('Powiązanie linku z dokumentem', function(assert) {
        const head = document.querySelector("head");
        loadLib("./src/style.css", "css");
        assert.ok(head.querySelector('[href="./src/style.css"]'), "Link prawidłowo powiązany");
    });

    QUnit.test('Powiązanie skryptu z dokumentem', function(assert) {
        const body = document.querySelector("body");
        loadLib("./src/script.js", "js", "body");
        assert.ok(body.querySelector('[src="./src/script.js"]'), "Skrypt prawidłowo powiązany");
    });

    QUnit.test('Powiązanie skryptu z elementem z wersją', function(assert) {
        const content = document.getElementById('content');
        loadLib("./src/script.js", "js", "#content", 23);
        assert.ok(content.querySelector('[src="./src/script.js?ver=23"]'), "Skrypt prawidłowo powiązany w elemencie #content z wersją");
    });

    QUnit.test('Sprawdzenie istnienia elementów po dodaniu', function(assert) {
        let initialScriptCount = document.querySelectorAll('script').length;
        let initialLinkCount = document.querySelectorAll('link').length;

        loadLib("./src/style.css", "css");
        loadLib("./src/script.js", "js");

        assert.equal(document.querySelectorAll('link').length, initialLinkCount + 1, "Poprawnie dodany link do CSS");
        assert.equal(document.querySelectorAll('script').length, initialScriptCount + 1, "Poprawnie dodany skrypt");
    });

    QUnit.test('Błędne rozszerzenie pliku', function(assert) {
        let result = loadLib("./index.html", "html");
        assert.equal(result, "Niepoprawny rodzaj pliku", "Niepoprawny rodzaj pliku");
    });

    QUnit.test('Błędny selektor', function(assert) {
        let result = loadLib("./src/script.js", "js", "#nieistniejacyElement");
        assert.equal(result, "Niepoprawny selektor", "Funkcja prawidłowo zwróciła błąd dla niepoprawnego selektora");
    });

    QUnit.test('Dodanie skryptu bez podania targetNode', function(assert) {
        loadLib("./src/script.js", "js");
        assert.ok(document.body.querySelector('[src="./src/script.js"]'), "Skrypt prawidłowo powiązany z body, gdy targetNode jest pusty");
    });

    QUnit.test('Ładowanie CSS z wersją', function(assert) {
        loadLib("./src/style.css", "css", "", 2);
        assert.ok(document.head.querySelector('[href="./src/style.css?ver=2"]'), "CSS prawidłowo dodany z wersją");
    });

    QUnit.test('Błędny typ pliku', function(assert) {
        let result = loadLib("./src/file.txt", "txt");
        assert.equal(result, "Niepoprawny rodzaj pliku", "Funkcja prawidłowo obsłużyła błędny typ pliku");
    });
});
