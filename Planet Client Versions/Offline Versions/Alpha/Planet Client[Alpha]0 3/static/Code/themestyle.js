// Source Code https://stackoverflow.com/questions/14292997/changing-style-sheet-javascript (This is the original post but I can'f find the suggestion)
// I got it from a random suggestion in a post of someone also wanting to make a theme so I just took the code from there.
// The code shown here though is a lot more different than the suggestion that I took it from because of changes I made.

// Remove localStorage keys
function removeThemes() {
    localStorage.removeItem("0planetClientUserTheme");
    localStorage.removeItem("0planetClientUserTheme1");
};

// Preset Theme Code
function changeTheme(cssFile, cssLinkIndex) {
    var userThemeCSS = document.createElement("link");
    userThemeCSS.setAttribute("rel", "stylesheet");
    userThemeCSS.setAttribute("id", "theme");
    userThemeCSS.setAttribute("href", cssFile);
    document.getElementById("theme").replaceWith(userThemeCSS);
};

// 1 Import CSS Code
function importMenu1Code() {
    var importMenu1 = prompt("Input your CSS code into the input box");
    if (importMenu1) {
        var userThemeCSS1 = document.createElement("style");
        userThemeCSS1.setAttribute("id", "theme");
        userThemeCSS1.replaceChildren(importMenu1);
        document.getElementById("theme").replaceWith(userThemeCSS1);
        removeThemes();
        localStorage.setItem("0planetClientUserTheme1", importMenu1);
        alert("Saved \n (If you didn't meant to save CSS code or your CSS code is messed up, then you can click \"Reset Theme\" to reset your theme. Also, if the CSS code has any URLs online, it might be a problem if you are going to use it offline)");
        window.location.reload();
    } else {
        if (confirm("Did you meant to put in CSS code?")) {
            importMenu1Code();
        };
    };

};

// Import, Reset, and Save Preset Theme
function importTheme() {
    var importMenu = prompt("Where would you like to get your theme \n 1 Import CSS Code \n 2 Import CSS URL \n 3 Import File/Folder (Planet Client and file/folder need to be unzipped) \n 4 Planet Client Store \n 5 Cancel");

    // If user pressed 1 (Import CSS Code)
    if (importMenu === "1" && importMenu != "2" && importMenu != "3" && importMenu != "4" && importMenu != "5") {
        importMenu1Code();
    };

    // If user pressed 2 (Import CSS URL)
    if (importMenu === "2" && importMenu != "1" && importMenu != "3" && importMenu != "4" && importMenu != "5") {
        alert('This doesn\'t work. I had to get this update out fast because I promised but I couldn\'t make it work. Hopfully I can fix this issue. Thanks!\n-Tb');
    };

    // If user pressed 3 (Import File/Folder (Planet Client and file/folder need to be unzipped))
    if (importMenu === "3" && importMenu != "1" && importMenu != "2" && importMenu != "4" && importMenu != "5") {
        alert('This doesn\'t work. I had to get this update out fast because I promised but I couldn\'t make it work. Hopfully I can fix this issue. Thanks!\n-Tb');
    };

    // If user pressed 4 (Planet Client Store)
    if (importMenu === "4" && importMenu != "1" && importMenu != "2" && importMenu != "3" && importMenu != "5") {
        alert('This doesn\'t work. I had to get this update out fast because I promised but I couldn\'t make it work. Hopfully I can fix this issue. Thanks!\n-Tb');
    };

    // If user pressed 5 (Cancel)
    if (importMenu === "5" && importMenu != "1" && importMenu != "2" && importMenu != "3" && importMenu != "4") {
        
    };

    // If user declines or if the user's input was invalid
    if (importMenu === null) {
        
    } else if (importMenu != "1" && importMenu != "2" && importMenu != "3" && importMenu != "4" && importMenu != "5") {
        alert("Your input is invalid! Please try again");
        importTheme();
    };
};

function resetTheme() {
    if (confirm("Do you wish to reset your theme?")) {
        removeThemes();
        window.location.reload();
    } else {

    };
};

function savePresetTheme() {
    if (document.styleSheets[0].href) {
        removeThemes();
        localStorage.setItem("0planetClientUserTheme", document.styleSheets[0].href);
        alert("Saved");
        window.location.reload();
    } else {
        alert("It appears that there is no preset theme set... Try resetting your theme or picking a preset theme.");
    };
};

// Load Themes
// Load Preset Theme
if (localStorage.getItem("0planetClientUserTheme")) {
    var userThemeCSS = document.createElement("link");
    userThemeCSS.setAttribute("rel", "stylesheet");
    userThemeCSS.setAttribute("id", "theme");
    userThemeCSS.setAttribute("href", localStorage.getItem("0planetClientUserTheme"));
    document.getElementById("theme").replaceWith(userThemeCSS);
};

// Load Import CSS Code Option
if (localStorage.getItem("0planetClientUserTheme1")) {
    var userThemeCSS1 = document.createElement("style");
    userThemeCSS1.setAttribute("id", "theme");
    userThemeCSS1.replaceChildren(localStorage.getItem("0planetClientUserTheme1"));
    document.getElementById("theme").replaceWith(userThemeCSS1);
};