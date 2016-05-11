APP.factory('CurrentUser', function() {
  var CurrentUser = {
    save: function(data) {
      this.data = data;
    },
    retrieve: function() {
      return this.data;
    },
    destroy: function() {
      this.data = {};
    }
  };

  return CurrentUser;
});
