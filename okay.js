(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-1GVDBLHMMJ";
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-1GVDBLHMMJ");
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

// Remove the automatic display call

// Function to show ad when triggered manually
function showAd() {
  googletag.cmd.push(function () {
    googletag.display("gpt-passback");
  });
}

// Expose showAd function to be called when needed
window.showAd = showAd;
