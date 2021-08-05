const config = require("./config");
const path = require("path");

module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget('./_tmp/style.css')
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './dist/css/style.css' })

    return {
        dir: {
            input: config.devFolder,
            output: config.distFolder,
            includes: config.includesFolder,
            data: config.dataFolder
        }
    }
};