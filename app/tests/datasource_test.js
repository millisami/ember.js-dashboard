require('dashboard/datasource');

module("Dashboard.DataSource");

test("it exists",
function() {
    ok(Dashboard.DataSource, "datasource exists");
    ok(Ember.Object.detect(Dashboard.DataSource), "it is a subclass of Ember.Object");
});