/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const fs = require('fs');

exports.onPostBuild = function() {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'));

  fs.mkdirSync(path.join(__dirname, 'docs'));

};