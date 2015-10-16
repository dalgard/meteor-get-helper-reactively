nordlys:get-helper-reactively 0.1.0
===================================

Blaze extension for getting and setting template helpers reactively.

This package is a solution for issue [#5194](https://github.com/meteor/meteor/issues/5194). It allows using template helpers that hasn't been added to the template yet, and have the UI update once they are added during or after rendering.

It works by wrapping the two Blaze methods `Template.prototype.helpers` and `Blaze._getTemplateHelper`.

**Note:** The Blaze source contains a comment above `Blaze.View.prototype.lookup` stating that "This function must not establish any reactive dependencies itself". I haven't been able to deduce the implications of this ("itself"?), but consider yourself cautioned.

