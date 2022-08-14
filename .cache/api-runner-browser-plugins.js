module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":600,"showCaptions":["alt"],"markdownCaptions":true,"backgroundColor":"none","wrapperStyle":"border-bottom: none;","linkImagesToOriginal":true,"sizeByPixelDensity":false,"quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[],"offsetY":100,"icon":"<svg aria-hidden=\"true\" height=\"20\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" style=\"margin: 0 0 -0.2rem 0.7rem; \"><path fill=\"white\" fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>","className":"autolink-headers","maintainCase":true,"removeAccents":true,"isIconAfterHeader":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://imflos.github.io"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ramon Morcillo","short_name":"imflos.github.io","start_url":"/","background_color":"#255799","theme_color":"#255799","display":"standalone","icon":"static/images/favicon/kiwi.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"Add the Google Analytics Tracking ID","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
