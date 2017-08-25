/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-spectrum-color-picker',

  options: {
    nodeAssets: {
      'spectrum-colorpicker': {
        vendor: ['spectrum.js', 'spectrum.css'],
        processTree(input) {
          return fastbootTransform(input);
        }
      }
    }
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/spectrum-colorpicker/spectrum.js');
    app.import('vendor/spectrum-colorpicker/spectrum.css');
  }
};
