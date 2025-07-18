(function () {
  const script = document.createElement("script");
  script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);

  window.googletag = window.googletag || { cmd: [] };

  window.loadGoogleAd = function ({
    containerId,
    slotId,
    adUnitPath,
    width,
    height,
  }) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Ad container "${containerId}" not found`);
      return;
    }

    const adDiv = document.createElement("div");
    adDiv.id = slotId;
    adDiv.style.minWidth = `${width}px`;
    adDiv.style.minHeight = `${height}px`;
    container.appendChild(adDiv);

    googletag.cmd.push(function () {
      googletag
        .defineSlot(adUnitPath, [width, height], slotId)
        .addService(googletag.pubads());
      googletag.enableServices();
      googletag.display(slotId);
    });
  };
})();
