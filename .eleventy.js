module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  return {
    templateFormats: ["html", "liquid", "css"],
  };
};
