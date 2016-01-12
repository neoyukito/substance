'use strict';

module.exports = {

  tagName: 'meta',
  type: 'meta',

  import: function(el, node, converter) {
    node.id = 'meta';
    var titleEl = el.find('title');
    if (titleEl) {
      node.title = converter.annotatedText(titleEl, ['meta', 'title']);
    } else {
      node.title = '';
    }
  },

  export: function(node, el, converter) {
    var $$ = converter.$$;
    el.append($$('title').append(
      converter.annotatedText(['meta', 'title'])
    ));
  }

};