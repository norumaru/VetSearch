app.VetClinicView = Backbone.View.extend({

	tagName: 'tr',
  	template: _.template($('#vet-list-item-template').html()),

  	render: function(){
      console.log ("RENDER ITEM: "+JSON.stringify(this.model));
	    this.$el.html(this.template(this.model.toJSON()));
	    return this; // enable chained calls
  	},
  	initialize: function(){
    	console.log("INIT ITEM");
	    this.model.on('change', this.render, this);
	},
	events: {
    'dblclick label' : 'detail'
	},
	detail: function(){
    console.log("DETAIL");
		if (history.pushState) {
          	var newurl = window.location.protocol + "//" + window.location.host 
          		+ window.location.pathname + '#id='+this.model.id;
        	console.log("DETAIL URL: "+newurl);
          	window.history.pushState({path:newurl},'',newurl);
    }
	}
})