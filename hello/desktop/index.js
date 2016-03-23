'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on("ready", function() {
    mainWindow = new BrowserWindow({
        title: "HelloApp",
        width: 1024,
        height: 768
    });
});