// Google Analytics Setup
(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-FKGJDDN31P";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag; // Expose gtag globally

  gtag("js", new Date());
  gtag("config", "G-FKGJDDN31P");
})();

// Function to show rewarded ad and redirect
function showRewardedAdAndRedirect(age) {
  if (age) {
    localStorage.setItem("userAge", age);
  }
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
      // Send event to Google Analytics
      gtag("event", "rewarded_ad_ready", {
        event_category: "Ads",
        event_label: "Rewarded Ad",
      });
    });

    // Redirect to the quiz page after the ad is closed
    googletag.pubads().addEventListener("rewardedSlotClosed", function () {
      googletag.destroySlots([rewardedSlot]);

      // Send event to Google Analytics
      gtag("event", "rewarded_ad_closed", {
        event_category: "Ads",
        event_label: "User Closed Rewarded Ad",
      });

      // window.location.href = "randomquiz.html"; // Uncomment to redirect
    });
  });
}

// Expose function globally so it can be used in other files
window.showRewardedAdAndRedirect = showRewardedAdAndRedirect;
