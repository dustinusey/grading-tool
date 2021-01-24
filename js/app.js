const settingsClose = document.querySelector('.close-container i');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target === settingsClose) {
        overlay.classList.remove('active-overlay');
    }
    
})

const settingsNavUl = document.querySelector('.settings-container .side-panel ul');
const settingsNavList = document.querySelectorAll('.settings-list-item');
// settings sections
const settingsSections = document.querySelectorAll('.settings-panel section');

settingsNavUl.addEventListener('click', e => {
    iterateClassForSettingsSections(settingsNavList, 'active', e);
});







// themes
const body = document.querySelector('body');
const bodyClasses = ['treehouse-og', 'purplicious', 'blue-stone', 'wine'];



const preMadeThemeList = document.querySelector('.pre-made-theme-list');
const themeChoices = preMadeThemeList.querySelectorAll('li');
const themeImages = document.querySelectorAll('.pre-made-theme-selector-container img');

preMadeThemeList.addEventListener('click', e => {
    iterateClassForThemeSelections(themeChoices, 'active', e);

    themeChoices.forEach((choice, index) => {
        if (e.target === choice) {
            addBodyClass(bodyClasses[index]);
        }
    })
});




// set theme

const baseColorInput = document.querySelector('.base-color-input');
const baseColorDiv = document.querySelector('.base-color-div');

const accentColorInput = document.querySelector('.accent-color-input');
const accentColorDiv = document.querySelector('.accent-color-div');

const customThemeApply = document.querySelector('.custom-theme-apply');

baseColorInput.addEventListener('keyup', e => {
    baseColorDiv.style.background = baseColorInput.value;
    if (baseColorInput.value !== '' && accentColorInput.value !== '') {
        customThemeApply.classList.add('active');
    }  else {
        customThemeApply.classList.remove('active');
    }
});
accentColorInput.addEventListener('keyup', e => {
    accentColorDiv.style.background = accentColorInput.value;
    if (baseColorInput.value !== '' && accentColorInput.value !== '') {
        customThemeApply.classList.add('active');
    }  else {
        customThemeApply.classList.remove('active');
    }
});
const root = document.querySelector(':root');
customThemeApply.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
        
        body.classList = 'no-class';
        root.style.setProperty('--side-panel', baseColorInput.value);
        root.style.setProperty('--accent-panel', accentColorInput.value);
        console.log();
    }
})
// const root = document.querySelector(':root');
// root.style.setProperty('--tool-bg', 'green');
