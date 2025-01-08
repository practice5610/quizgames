(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-FKGJDDN31P";
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-FKGJDDN31P");
})();

window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(function () {
  googletag
    .defineSlot(
      "/22846411849,23007846454/JBM_airbytegames.com_Res1",
      [[336, 280], [300, 250], "fluid"],
      "gpt-passback"
    )
    .addService(googletag.pubads());
  googletag.enableServices();
  if (Math.random() < 0.5) {
    const GEO_TARGETS = [
      "California, US",
      "New York, US",
      "Melbourne, AU",
      "Victoria, AU",
      "Toronto, CA",
      "Ottawa, CA",
      "Wellington, NZ",
    ];
    const geoTarget =
      GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];
    console.log("GEO", geoTarget);
    googletag.pubads().setLocation(geoTarget);
  }
});
googletag.cmd.push(function () {
  googletag.display("gpt-passback");
});
window.googletag = window.googletag || { cmd: [] };
let rewardedSlot;
googletag.cmd.push(function () {
  rewardedSlot = googletag
    .defineOutOfPageSlot(
      "/22846411849,23007846454/JBM_airbytegames.com_Res2",
      googletag.enums.OutOfPageFormat.REWARDED
    )
    .addService(googletag.pubads());

  googletag.enableServices();
  if (Math.random() < 0.5) {
    const GEO_TARGETS = [
      "California, US",
      "New York, US",
      "Melbourne, AU",
      "Victoria, AU",
      "Toronto, CA",
      "Ottawa, CA",
      "Wellington, NZ",
    ];
    const geoTarget =
      GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];
    console.log("GEO Target:", geoTarget);
    googletag.pubads().setLocation(geoTarget);
  }
});

googletag.cmd.push(function () {
  googletag.display(rewardedSlot);

  googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
    evt.makeRewardedVisible();
  });

  googletag.pubads().addEventListener("rewardedSlotGranted", function () {
    console.log("Reward granted to user");
  });

  googletag.pubads().addEventListener("rewardedSlotClosed", function () {
    googletag.destroySlots([rewardedSlot]);
    console.log("Rewarded slot closed and destroyed");
  });
});
