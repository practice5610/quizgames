// (function () {
//   if (!window.googletag) {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
//     document.head.appendChild(script);

//     script.onload = function () {
//       console.log("✅ GPT script loaded successfully!");
//       initAdManager(); // Initialize ads after loading GPT
//     };
//   } else {
//     initAdManager(); // If already loaded, just initialize ads
//   }
// })();

// function initAdManager() {
//   console.log("🔄 Initializing Ad Manager...");

//   window.googletag = window.googletag || { cmd: [] };
//   googletag.cmd.push(function () {
//     googletag.pubads().disableInitialLoad(); // Prevent auto-loading of ads
//     googletag.enableServices();
//     console.log("✅ Ad Manager initialized.");
//   });
// }

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

function showRewardedAdAndRedirect(age, redirectUrl) {
  console.log("🎯 showRewardedAdAndRedirect called with:", {
    age,
    redirectUrl,
  });

  if (!window.googletag || !googletag.apiReady) {
    console.warn("⚠️ GPT is not ready yet! Retrying in 500ms...");
    setTimeout(() => showRewardedAdAndRedirect(age, redirectUrl), 500);
    return;
  }

  googletag.cmd.push(function () {
    console.log("🔄 Creating rewarded ad slot...");

    // Debugging: Check if REWARDED format exists
    if (!googletag.enums || !googletag.enums.OutOfPageFormat) {
      console.error("❌ googletag.enums.OutOfPageFormat is undefined!");
      return;
    }
    console.log(
      "✅ googletag.enums.OutOfPageFormat:",
      googletag.enums.OutOfPageFormat
    );

    // Try to define the rewarded ad slot
    const rewardedSlot = googletag.defineOutOfPageSlot(
      "/23280037943/av_2",
      googletag.enums.OutOfPageFormat.REWARDED
    );

    if (!rewardedSlot) {
      console.error(
        "❌ Failed to create rewardedSlot! Check Ad Manager settings."
      );
      return;
    }

    rewardedSlot.addService(googletag.pubads());
    googletag.display(rewardedSlot);

    // Debug: Check if slot is displayed
    console.log("✅ Rewarded slot created and displayed:", rewardedSlot);
    googletag.pubads().addEventListener("slotOnload", function (event) {
      console.log("🎯 Ad slot loaded:", event.slot.getSlotElementId());
    });

    googletag.pubads().addEventListener("slotRenderEnded", function (event) {
      console.log(
        "📺 Ad Render Ended. Status:",
        event.isEmpty ? "No Ad Available" : "Ad Displayed"
      );
    });

    // Show the ad when it's ready
    googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
      console.log("✅ Rewarded Ad is ready! Making it visible...");
      try {
        evt.makeRewardedVisible(); // Show the ad
      } catch (error) {
        console.error("❌ Error displaying rewarded ad:", error);
      }

      // Send event to Google Analytics
      gtag("event", "rewarded_ad_ready", {
        event_category: "Ads",
        event_label: "Rewarded Ad",
      });
    });

    // Redirect after ad is closed
    googletag.pubads().addEventListener("rewardedSlotClosed", function () {
      console.log("🔴 Rewarded Ad Closed. Redirecting...");
      googletag.destroySlots([rewardedSlot]);

      gtag("event", "rewarded_ad_closed", {
        event_category: "Ads",
        event_label: "User Closed Rewarded Ad",
      });

      if (age) {
        localStorage.setItem("userAge", age);
      }

      if (redirectUrl) {
        console.log("🔀 Redirecting to:", redirectUrl);
        window.location.href = redirectUrl;
      }
    });
  });
}

// Expose function globally
window.showRewardedAdAndRedirect = showRewardedAdAndRedirect;
