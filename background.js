function openPage() {
  browser.tabs.create({
    url: "https://github.com/"
  });
}

browser.browserAction.onClicked.addListener(openPage);
