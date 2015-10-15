// Name of dependency store on template
let deps_key = "__helperDeps";

// Save super methods
let getTemplateHelper = Blaze._getTemplateHelper,
    helpers = Blaze.Template.prototype.helpers;


// Wrap method to depend on the helper name
Blaze._getTemplateHelper = function (template, name, templateInstance) {
  let deps = template[deps_key];

  if (!_.isObject(deps))
    template[deps_key] = deps = {};

  if (!(deps[name] instanceof Tracker.Dependency))
    deps[name] = new Tracker.Dependency;

  deps[name].depend();

  return getTemplateHelper.call(this, template, name, templateInstance);
};


// Wrap method to update dependencies after adding helpers
Blaze.Template.prototype.helpers = function (dict) {
  let result = helpers.call(this, dict),
      deps = this[deps_key];

  if (_.isObject(deps)) {
    _.each(dict, (helper, name) => {
      if (deps[name] instanceof Tracker.Dependency) {
        deps[name].changed();
      }
    });
  }

  return result;
};
