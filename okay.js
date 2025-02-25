(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-08WXH14EN4";
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-08WXH14EN4");
})();

window.googletag = window.googletag || {
  cmd: [],
};
googletag.cmd.push(function () {
  googletag
    .defineSlot(
      "/22847667724/ab_1",
      [[336, 280], [300, 250], "fluid"],
      "gpt-passback"
    )
    .addService(googletag.pubads());
  googletag.enableServices();
  _();
});
googletag.cmd.push(function () {
  googletag.display("gpt-passback");
});
window.googletag = window.googletag || {
  cmd: [],
};
if (Math.random() < 1.0) {
  console.log("------>>>>>11", "");
  let rewardedSlot;
  googletag.cmd.push(function () {
    rewardedSlot = googletag
      .defineOutOfPageSlot(
        "/22847667724/ab_2",
        googletag.enums.OutOfPageFormat.REWARDED
      )
      .addService(googletag.pubads());

    googletag.enableServices();
    _();
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
}
