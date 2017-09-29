var applyLanguage = function (lang) {
    alert('now language is: ' + lang);
};

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    var savedLanguage = localStorage.getItem('lang');

    (localStorage && savedLanguage) ? defaultLanguage = savedLanguage : '';

    return defaultLanguage;
};

var currentLang = getCurrentLanguage();

// display currentLang
displayText(currentLang);

var $save = document.querySelector('html body button#save');

$save.addEventListener('click', function () {
    var checkedInput = document.querySelector('#languages input[type="radio"]:checked').parentNode;

    if (checkedInput) {
        var checkedLanguage = checkedInput.innerText.trim().toLowerCase();
        if (localStorage) {
            localStorage.setItem('lang', checkedLanguage);
        }
        applyLanguage(checkedLanguage);

        var elementsVisible = document.querySelectorAll('.lang.visible');

        if (elementsVisible) {
            for (var v = 0; v < elementsVisible.length; v++) {
                elementsVisible[v].classList.remove('visible');
            }

        }
        displayText(checkedLanguage);
    }
});


/**
 * function select checked language
 * @param lang
 * @constructor
 */
function langChecked(lang) {
    var langInputs = document.querySelectorAll('#languages input[type="radio"]');

    for (var i = 0; i < langInputs.length; i++) {
        langInputs[i].removeAttribute('checked');
        if (langInputs[i].parentNode.innerText.trim().toLowerCase() === lang) {
            langInputs[i].setAttribute('checked', 'checked');
        }
    }
}

/**
 * function display text checked language
 * @param lang
 */
function displayText(lang) {
    var langEls = document.getElementsByClassName('lang-' + lang);

    langChecked(lang);

    for (var i = 0; i < langEls.length; i++) {
        var langEl = langEls[i];

        langEl.classList.add('visible');
    }
}