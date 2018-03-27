app.Router = Backbone.Router.extend({
  routes: {
    '*filter' : 'setFilter'
  },
  setFilter: function(params) {
    console.log('ROUTER PARAMS = ' + params);
    var clinic;
    app.nameFilter = '';
    if (params){
    	var parameters = params.split("&");
	    if (parameters.length > 0 && parameters[0]){
	    	for (var i = 0; i < parameters.length; i++) {
	    		var par = parameters[i].split("=");
	    		if (par[0] == "id" && par[1]){
	    			console.log("CLINIC VIEW");
	    			//fetch the clinic, filtering it by id, then send the result, 
	    			//through the add event, to the method startDetailView
	    			app.clinicList = new app.ClinicList();
			    	app.clinicList.on('add', this.startDetailView, this);
			    	app.clinicList.fetch({
			    		dataType: 'jsonp',
			    		data:{ id: par[1] }
			    	}); 
	    			return;
	    		}else if (par[0] == "name" && par[1]){
    				console.log("SEARCH VIEW");
	    			/*app.clinicList = new app.ClinicList();
	    			app.clinicList.on('update', this.startListView, this);
			    	app.clinicList.fetch({
			    		dataType: 'jsonp',
			    		data:{ name: par[1] }
			    	});*/
					app.nameFilter=par[1];
			    	break;
	    		}
	    	}
	    }

	}
    console.log("LIST VIEW");
	// clean the list
	$('#clinic-list').html('');
  	app.clinicList = new app.ClinicList();
	app.clinicList.on('update', this.startListView, this);
    // Loads clinic list from server (Data type is to fix the Access-Control-Allow-Origin error)
	app.clinicList.fetch({dataType: 'jsonp'}); 
  },
  //Start the Detail view with the model it uses and hide the list section of the page
  startDetailView: function(clinic) {
    app.hideElement("list-section");
    app.showElement("detail-section");
	app.vetDetailView = new app.VetDetailView({model: clinic});
  },
  //Start the List view with the list it uses and hide the detail section of the page
  startListView: function(clinics) {
	var clinicsFiltered = app.clinicList.byName(app.nameFilter);
  	app.hideElement("detail-section");
  	app.showElement("list-section");
	//Show the list of Vets
	app.vetListView = new app.VetListView(clinicsFiltered);
  }
});

app.router = new app.Router();
Backbone.history.start();