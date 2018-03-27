app.ClinicList = Backbone.Collection.extend({
  model: app.Clinic,
  url: "http://localhost:3000/clinics",
  byName: function (name) {
    filtered = this.filter(function (clinic) {
        return clinic.get("name").indexOf(name)>-1;
    });
    return new app.ClinicList(filtered);
  }
});

console.log("VET-SPA");