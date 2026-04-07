const { withAndroidManifest } = require("@expo/config-plugins");

/**
 * Config plugin to restrict the Android app to phones only (no tablets).
 * Adds <supports-screens> to AndroidManifest.xml with largeScreens and
 * xlargeScreens set to false, which signals Google Play to filter out tablets.
 */
module.exports = function withAndroidPhoneOnly(config) {
  return withAndroidManifest(config, (modConfig) => {
    const manifest = modConfig.modResults.manifest;

    manifest["supports-screens"] = [
      {
        $: {
          "android:smallScreens": "true",
          "android:normalScreens": "true",
          "android:largeScreens": "false",
          "android:xlargeScreens": "false",
        },
      },
    ];

    return modConfig;
  });
};
