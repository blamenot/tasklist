define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['addTaskTmpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n    <input type=\"text\" id=\"task-title-input\" name=\"title\" />\n    <input type=\"text\" id=\"task-description-input\" name=\"description\" />\n    <input type=\"submit\" id=\"task-submit\" valu=\"submit\" />\n</form>";
},"useData":true});
});