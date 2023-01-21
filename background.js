const addList = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googletagservices.com/*",
    "*://*.googleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googleadservices.com/*",
    "*://*.zedo.com/*",
    "*://*.adbrite.com/*",
    "*://*.adbureau.net/*",
    "*://*.carbonads.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleadservices.com/*",
    "*://*.cdn.zedo.com/*",
];

chrome.webRequest.onbeforeRequest.addListener(
    (_details)=>{
return {cancel:true}
    },
        {urls:addList},
        ["blocking"]
);
