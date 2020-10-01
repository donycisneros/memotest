// This configuration can be seen in the following documentation:
// https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = 'Memotest';	// Replace your title here
      return args;
    });
  }
};
