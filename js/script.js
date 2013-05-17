function onDeviceReady() {
    var root = this;
    cb = window.plugins.childBrowser;

    if(cb != null) {
    cb.onLocationChange = function(loc){ root.locChanged(loc); };
    cb.onClose = function(){root.onCloseBrowser(); };
    cb.onOpenExternal = function(){root.onOpenExternal(); };
    cb.showWebPage("http://cdn.phpreferencebook.com/wp-content/uploads/2008/12/php_reference_-_beginner_to_intermediate_php5.pdf");

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