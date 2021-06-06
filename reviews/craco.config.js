const singleSpaApplicationPlugin = require('craco-plugin-single-spa-application');

module.exports = {
    plugins: [{
        plugin: singleSpaApplicationPlugin,
        options: {
        orgName: "nit",
        projectName: "reviews",
        entry: "src/index.tsx", //defaults to src/index.js,
        orgPackagesAsExternal: false, // defaults to false. marks packages that has @my-org prefix as external so they are not included in the bundle
        reactPackagesAsExternal: true, // defaults to true. marks react and react-dom as external so they are not included in the bundle
        externals: [], // defaults to []. marks the specified modules as external so they are not included in the bundle
        minimize: false // defaults to false, sets optimization.minimize value
      },
    }]
}