const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
    // initialising application start url
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '..', 'build', 'index.html'),
        protocol: 'file:',
        slashes: true
    })
    // Create the browser window.
    const window = new BrowserWindow({
        width: 1366,
        height: 768,
        minHeight: 768,
        minWidth: 1366,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.setMenuBarVisibility(false);
    window.loadURL(startUrl);
    // Open the DevTools.
    // window.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
