Meteor.user();
Meteor.userId();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.missatges.missatges = function () {
  return Missatges.find({}, { sort: { time: -1 }});
}

Template.entrada.events = {

  'click #submit' : function (event) {
      var infoenviament = 'Autor ';
      if (Meteor.user())
        var nom = Meteor.user().username;
      else
        var nom = 'Anònim';
      var missatge = document.getElementById('missatge');

      var m = (new Date()).getMinutes();
      if (m<10){
        m= "0" + m;
      }

      var h = (new Date()).getHours();
      if (h<10){
        h= "0" + h;
      }

      var s = (new Date()).getSeconds();
	  if (s<10){
        s= "0" + s;
      }

      var temps = h + ":" + m + ":" + s;
      
      if (missatge.value != '') {

        Missatges.insert({
          infoenviament: infoenviament,
          nom: nom,
          missatge: missatge.value,
          time: temps,
        });
        
        Session.set("Info_sms", infoenviament);
        Session.set("sms_enviat", missatge.value);

        document.getElementById('missatge').value = '';
        missatge.value = '';
      }
    },
  
    'keydown input#missatge' : function (event) {
    if (event.which == 13) { 
	  var infoenviament = 'Autor ';
      if (Meteor.user())
        var nom = Meteor.user().username;
      else
        var nom = 'Anònim';
      var missatge = document.getElementById('missatge');
      
      var m = (new Date()).getMinutes();
      if (m<10){
        m= "0" + m;
      }

      var h = (new Date()).getHours();
      if (h<10){
        h= "0" + h;
      }

      var s = (new Date()).getSeconds();
	  if (s<10){
        s= "0" + s;
      }

      var temps = h + ":" + m + ":" + s;
      
      if (missatge.value != '') {
        Missatges.insert({
          infoenviament: infoenviament,
          nom: nom,
          missatge: missatge.value,
          time: temps,
        });
        
        Session.set("Info_sms", infoenviament);
        Session.set("sms_enviat", missatge.value);

        document.getElementById('missatge').value = '';
        missatge.value = '';
      }
    }
  }
 };

