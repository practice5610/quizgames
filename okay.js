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

window.googletag = window.googletag || { cmd: [] };

googletag.cmd.push(function () {
  googletag
    .defineSlot(
      "/22847667724/ab_1",
      [[336, 280], [300, 250], "fluid"],
      "gpt-passback"
    )
    .addService(googletag.pubads());
  googletag.enableServices();
});

googletag.cmd.push(function () {
  googletag.display("gpt-passback");
});

// Function to display rewarded ad on click
function showRewardedAd() {
  let rewardedSlot;
  googletag.cmd.push(function () {
    rewardedSlot = googletag
      .defineOutOfPageSlot(
        "/22847667724/ab_2",
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
}

// Attach event listeners to buttons
window.onload = function () {
  document.getElementById("above-18").addEventListener("click", showRewardedAd);
  document.getElementById("below-18").addEventListener("click", showRewardedAd);
};
