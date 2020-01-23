const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(() => {
  return {
    name: 'ignore-fonts',
    visitor: {
      ImportDeclaration(path) {
        const regexFontList = [/woff/, /woff2/, /eot/, /svg/, /ttf/];
        const isMatch = regexFontList.some(rx => rx.test(path.node.source.value))
        if (isMatch) {
          path.remove();
        }
      }
    }
  };
});
