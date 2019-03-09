var testSoundURL = "https://notificationsounds.com/soundfiles/c86a7ee3d8ef0b551ed58e354a836f2b/file-sounds-733-scratch.mp3"

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("We were consulted");
        return {redirectUrl: testSoundURL};
    },
    {urls: ["*://static.xx.fbcdn.net/rsrc.php/yy/r/XFhtdTsftOC.ogg"]},
    ["blocking",]
);