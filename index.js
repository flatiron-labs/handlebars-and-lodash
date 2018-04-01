(function() {
  registerHandleBarsHelpers();
  var people = {
    people: [
      {firstName: "Yehuda", lastName: "Katz"},
      {lastName: "Lerche"},
      {firstName: "Alan", lastName: "Johnson"}
    ]
  }
  var source = document.getElementById('template').innerHTML;
  var templateBuilder = Handlebars.compile(source);
  console.log()
  document.getElementById("results").innerHTML = templateBuilder(people);
})();


function registerHandleBarsHelpers() {
    Handlebars.registerHelper('list', function(items, options) {
    console.log(options);
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
      out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
  });

  Handlebars.registerPartial("somePartial", "{{firstName}} is cool")

}
