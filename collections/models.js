/**
* Models
*/
Missatges = new Meteor.Collection('missatges');

// permet afegir missatges
Missatges.allow({
  insert: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

// no permet modificar-los o eliminar-los.
Missatges.deny({
  update: function() {
    return true;
  }
});