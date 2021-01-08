// Retrieve remote BrowserWindow
const win = require('electron').remote.getCurrentWindow()

document.onreadystatechange =  () => {
    if (document.readyState == "complete") {
        init();
    }
};

function init() {

    // Minimize task
    document.getElementById("min-btn").addEventListener("click", (e) => {
        let window = win;
        window.minimize();
    });

    // Close app
    document.getElementById("close-btn").addEventListener("click", (e) => {
        let window = win;
        window.close();
    });
};

// try {
//     require('electron-reloader')(module)
//   } catch (_) {}
