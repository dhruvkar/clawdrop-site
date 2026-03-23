module.exports = function(eleventyConfig) {
  // Passthrough copy for existing static pages and assets
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("submit");
  eleventyConfig.addPassthroughCopy("thank-you");
  eleventyConfig.addPassthroughCopy("assets");

  // Blueprints collection
  eleventyConfig.addCollection("blueprints", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blueprints/posts/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Archives collection
  eleventyConfig.addCollection("archives", function(collectionApi) {
    return collectionApi.getFilteredByGlob("archives/posts/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Learn collection
  eleventyConfig.addCollection("learn", function(collectionApi) {
    return collectionApi.getFilteredByGlob("learn/posts/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Excerpt filter
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return '';
    const text = content.replace(/<[^>]+>/g, '').replace(/\n/g, ' ').trim();
    return text.length > 160 ? text.substring(0, 157) + '...' : text;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk"
  };
};
