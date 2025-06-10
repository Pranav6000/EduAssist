const path = require("path");

module.exports = {
  packagerConfig: {
    icon: path.resolve(__dirname, "assets", "logo"), // NO EXTENSION
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl: "https://yourdomain.com/icon.ico", // optional, for installer
        setupIcon: path.resolve(__dirname, "assets", "logo.ico"), // for setup.exe
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
