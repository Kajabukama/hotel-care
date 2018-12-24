const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let aboutWindow;

const routeHome = "http://localhost:3000";
const routeAbout = 'http://localhost:3000/about';

function createWindow() {
   mainWindow = new BrowserWindow({ width: 1280, height: 840, frame: true });
   mainWindow.loadURL(isDev ? routeHome : `file://${path.join(__dirname, '../build/index.html')}`);

   mainWindow.on('closed', () => mainWindow = null);
   showAboutWindow();
}

function showAboutWindow() {

   aboutWindow = new BrowserWindow({
      title: 'About', 
      width: 400, 
      height: 680, 
      show: false,
      parent: mainWindow,
      modal: true,
      maximizable: false
   });
   aboutWindow.loadURL(isDev ? routeAbout : `file://${path.join(__dirname, "../build/index.html")}`);

   aboutWindow.on("close", (eve) => {
      eve.preventDefault();
      aboutWindow.hide()
   });

   aboutWindow.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   if (mainWindow === null) {
      createWindow();
   }
});

//  other application logic

ipcMain.on('show-about', () => {
   aboutWindow.show()
})