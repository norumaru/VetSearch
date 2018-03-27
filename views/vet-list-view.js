app.VetListView = Backbone.View.extend({
  	el: '#list-section',
  	initialize: function (clinics) {
      console.log("INIT LIST");
      // clean the list
      this.$('#clinic-list').html('');
      //Create each item of the list
      for (var i = 0; i < clinics.length; i++) {     
        var view = new app.VetClinicView({model: clinics.at(i)});
        $('#clinic-list').append(view.render().el);
      };
  	},events: {
      "keypress input" : "search"
    },
    search: function(e){
      //If the pressed key is ENTER
      if (e.keyCode==13){
          app.router.navigate('#name='+$("#search-input").val(),true);
      }
    }
});