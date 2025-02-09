{
    ad_type: 'Mixed',
    htmlContent: '<div id="gpt-passback">\n' +
      '<script>\r\n' +
      '    window.googletag = window.googletag || { cmd: [] };\r\n' +
      '    googletag.cmd.push(function () {\r\n' +
      "      googletag.defineSlot('/23201701724/ads/banner_1', [[300, 250], [336, 280], 'fluid'], 'gpt-passback')\r\n" +
      '        .addService(googletag.pubads());\r\n' +
      '      googletag.enableServices();\r\n' +
      '      if (Math.random() < 0.5) {\r\n' +
      '        const GEO_TARGETS = [\r\n' +
      '          "San Francisco, US",\r\n' +
      '          "Los Angeles, US",\r\n' +
      '          "New York, US",\r\n' +
      '          "Chicago, US",\r\n' +
      '          "Miami, US",\r\n' +
      '          "Seattle, US",\r\n' +
      '          "London, UK",\r\n' +
      '          "Sydney, AU",\r\n' +
      '          "Melbourne, AU",\r\n' +
      '          "Toronto, CA",\r\n' +
      '          "Vancouver, CA",\r\n' +
      '          "Dubai, UAE",\r\n' +
      '          "Singapore, SG",\r\n' +
      '          "Hong Kong, HK",\r\n' +
      '          "Paris, FR",\r\n' +
      '          "Berlin, DE",\r\n' +
      '          "Tokyo, JP",\r\n' +
      '          "Seoul, KR",\r\n' +
      '          "Zurich, CH",\r\n' +
      '          "Geneva, CH",\r\n' +
      '        ];\r\n' +
      '        const geoTarget = GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];\r\n' +
      '        console.log("GEO", geoTarget);\r\n' +
      '        googletag.pubads().setLocation(geoTarget);\r\n' +
      '      }\r\n' +
      "      googletag.display('gpt-passback');\r\n" +
      '    });\r\n' +
      '  </script>\n' +
      '</div>',
    scripts: [
      {
        content: null,
        src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'
      },
      {
        content: 'window.googletag = window.googletag || { cmd: [] };\r\n' +
          '    googletag.cmd.push(function () {\r\n' +
          "      googletag.defineSlot('/23201701724/ads/banner_1', [[300, 250], [336, 280], 'fluid'], 'gpt-passback')\r\n" +
          '        .addService(googletag.pubads());\r\n' +
          '      googletag.enableServices();\r\n' +
          '      if (Math.random() < 0.5) {\r\n' +
          '        const GEO_TARGETS = [\r\n' +
          '          "San Francisco, US",\r\n' +
          '          "Los Angeles, US",\r\n' +
          '          "New York, US",\r\n' +
          '          "Chicago, US",\r\n' +
          '          "Miami, US",\r\n' +
          '          "Seattle, US",\r\n' +
          '          "London, UK",\r\n' +
          '          "Sydney, AU",\r\n' +
          '          "Melbourne, AU",\r\n' +
          '          "Toronto, CA",\r\n' +
          '          "Vancouver, CA",\r\n' +
          '          "Dubai, UAE",\r\n' +
          '          "Singapore, SG",\r\n' +
          '          "Hong Kong, HK",\r\n' +
          '          "Paris, FR",\r\n' +
          '          "Berlin, DE",\r\n' +
          '          "Tokyo, JP",\r\n' +
          '          "Seoul, KR",\r\n' +
          '          "Zurich, CH",\r\n' +
          '          "Geneva, CH",\r\n' +
          '        ];\r\n' +
          '        const geoTarget = GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];\r\n' +
          '        console.log("GEO", geoTarget);\r\n' +
          '        googletag.pubads().setLocation(geoTarget);\r\n' +
          '      }\r\n' +
          "      googletag.display('gpt-passback');\r\n" +
          '    });',
        src: null
      }
    ]
  }