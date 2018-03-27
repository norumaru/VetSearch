app.VetDetailView = Backbone.View.extend({

  	template: _.template($('#detail-template').html()),

  	render: function(){
      console.log ("RENDER DETAIL: "+JSON.stringify(this.model));
	    this.$el.html(this.template(this.model.toJSON()));
	    return this; // enable chained calls
  	},
  	initialize: function(){
    	console.log("INIT DETAIL");
	    this.model.on('change', this.render, this);
      // clean the detail and the list sections and add the new one
      $('#detail-section').html('');
      $('#detail-section').append(this.render().el);
	  },
    events: {
    'click button' : 'returnToList'
    },
	  detail: function(){
    	console.log("DETAIL");
  		if (history.pushState) {
          app.router.navigate('#id='+this.model.id,true);
    	}
	  },
    returnToList: function(){
      console.log("RETURN");
      if (history.pushState) {
          app.router.navigate('#',true);
      }
    }
})