define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['addTaskTmpl.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list-group-item\">\n    <form>\n        <div class=\"form-group\">\n            <input placeholder=\"Title\" class=\"form-control\" type=\"text\" id=\"task-title-input\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n        </div>\n        <div class=\"form-group\">\n            <input placeholder=\"Description\" id=\"task-description-input\" name=\"description\" class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" />\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary\" id=\"task-submit\" value=\"submit\" />\n        </div>\n    </form>\n</div>";
},"useData":true});
});