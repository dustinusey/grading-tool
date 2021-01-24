function iterateClassForSettingsSections(collection, className, e) {
    collection.forEach((item, index) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i ++) {
                collection[i].classList.remove(className);
                settingsSections[i].classList.add('section-hide');
            }
            e.target.classList.add(className);
            settingsSections[index].classList.remove('section-hide');
        }
    });
}
function iterateClassForThemeSelections(collection, className, e) {
    collection.forEach((item, index) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i ++) {
                collection[i].classList.remove(className);
                themeImages[i].classList.add('hidden-theme-img');
            }
            e.target.classList.add(className);
            themeImages[index].classList.remove('hidden-theme-img');
        }
    });
}

function iterateClass(collection, className, e) {
    collection.forEach((item) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i ++) {
                collection[i].classList.remove(className);
            }
            e.target.classList.add(className);
        }
    });
}


function addBodyClass(className) {
    body.classList = '';
    body.classList.add(className);
}