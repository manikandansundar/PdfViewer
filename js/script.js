function onDeviceReady() {
    var root = this;
    cb = window.plugins.childBrowser;

    if(cb != null) {
    cb.onLocationChange = function(loc){ root.locChanged(loc); };
    cb.onClose = function(){root.onCloseBrowser(); };
    cb.onOpenExternal = function(){root.onOpenExternal(); };
    cb.showWebPage("WebResources/pdf/GL_Styleguide_v5.pdf");

    }
}

function onCloseBrowser() {
    console.log("onCloseBrowser!");
}

function locChanged(loc) {
    console.log("locChanged!");
}

function onOpenExternal() {
    alert("onOpenExternal!");
}

document.addEventListener("deviceready", onDeviceReady, false);