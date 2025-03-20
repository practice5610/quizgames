(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-M7G2W5XLDE";
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-M7G2W5XLDE");
})();

window.googletag = window.googletag || {
  cmd: [],
};
googletag.cmd.push(function () {
  googletag
    .defineSlot(
      "/23089659153/ss_1",
      [[336, 280], [300, 250], "fluid"],
      "gpt-passback"
    )
    .addService(googletag.pubads());
  googletag.enableServices();

});
googletag.cmd.push(function () {
  googletag.display("gpt-passback");
});
window.googletag = window.googletag || {
  cmd: [],
};
let rewardedSlot;
googletag.cmd.push(function () {
  rewardedSlot = googletag
    .defineOutOfPageSlot(
      "/23089659153/ss_2",
      googletag.enums.OutOfPageFormat.REWARDED
    )
    .addService(googletag.pubads());

  googletag.enableServices();
  
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
