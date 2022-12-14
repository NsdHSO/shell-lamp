const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "f29",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: {type: "module"},

      // For remotes (please adjust)
      // name: "f29",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './apps/f-29/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {
        "auth": "https://login-carni.vercel.app/remoteEntry.js",
        "newpie": "https://newpie.vercel.app/remoteEntry.js",
        "login": "https://login-carni.vercel.app/remoteEntry.js",
        "herus": "https://herus.vercel.app/remoteEntry.js"
      },

      
      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors()
      })

    }),
  ],
};
