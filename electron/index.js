/**
 * Kavoa Electron script
 *
 */

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1280,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });

      // and load the index.html of the app.
      win.loadFile(__dirname + '/index.html');
});