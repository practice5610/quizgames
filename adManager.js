function showRewardedAdAndRedirect() {
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    const rewardedSlot = googletag
      .defineOutOfPageSlot(
        "/23280037943/av_2",
        googletag.enums.OutOfPageFormat.REWARDED
      )
      .addService(googletag.pubads());

    googletag.enableServices();
    googletag.display(rewardedSlot);

    // Show the ad when it's ready
    googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
      evt.makeRewardedVisible();
    });

    // Redirect to the quiz page after the ad is closed
    googletag.pubads().addEventListener("rewardedSlotClosed", function () {
      googletag.destroySlots([rewardedSlot]);
      // window.location.href = "randomquiz.html"; // Redirect to quiz page
    });
  });
}

// Attach function to window to use globally
window.showRewardedAdAndRedirect = showRewardedAdAndRedirect;
