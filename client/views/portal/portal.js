Template.portal.helpers({
  r: function () {
    return Session.get('register');
  },
  s: function () {
    return Session.get('signin');
  },
  f: function () {
    return Session.get('forgot');
  },
  resetPassword: function () {
    return Session.get('resetPassword');
  },
  displayMessage: function () {
    return Session.get('displayMessage');
  }
});

Template.portal.events({
  'click #home-logo': function () {
    Router.go('/');
    document.title = "CrowdFund";
  },
  'click #register': function () {
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim(); 
    var password = document.getElementById('password').value.trim();

    if (!username) {
      $('#username-group').addClass('has-error');
    }
    else {
      $('#username-group').removeClass('has-error');
    }
    if (!email) {
      $('#email-group').addClass('has-error');
    }
    else {
      $('#email-group').removeClass('has-error');
    }
    if (!password) { 
      $('#password-group').addClass('has-error');
    }
    else {
      $('#password-group').removeClass('has-error');
    }

    if (!username || !email || !password) {
      return;
    }

    if (password.length < 6) {
      Session.set('displayAlert', 'Password must be 6 characters or more.');
      return;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      Session.set('displayAlert', 'Email must be valid.');
      return;
    }
    else {
      Accounts.createUser({username: username, email: email, password : password}, function (err) {
        if (err) {
        } else {
          Router.go('/');
        }

      });
    }

  },

  'click #signin': function () {
    var key = document.getElementById('key').value.trim(); 
    var password = document.getElementById('password').value.trim();

    if (!key) {
      $('#key-group').addClass('has-error');
    }
    else {
      $('#key-group').removeClass('has-error');
    }
    if (!password) {
      $('#password-group').addClass('has-error');
    }
    else {
      $('#password-group').removeClass('has-error');
    }

    if (!key || !password) {
      return;
    }

    Meteor.loginWithPassword(key, password, function (error) {
      if (error) {
        bootbox.alert('Bad username or bad password.');
      } else {
        Router.go('/');
      }
    });
  },

  'click #reset': function () {
    var email = document.getElementById('email').value.trim(); 
    if (email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      $('#email-group').removeClass('has-error');
      Accounts.forgotPassword({email: email}, function (err) { 
        if (err)
          Session.set('displayMessage', 'Password reset error.');
        else {
          Session.set('displayMessage', 'A confirmation link has been sent to your email.');
        }
      });
    }
    else {
      $('#email-group').addClass('has-error');
    }
    return false; 
  },

  'click #change': function () {
    var password = document.getElementById('password').value;
    if (password.length >= 6) {
      Accounts.resetPassword(Session.get('resetPassword'), password, function (err) {
        if (err)
          Session.set('displayMessage', 'Password reset error.');
        else {
          Session.set('resetPassword', null);
        }
      });
    }
    return false; 
  },

  'click #register-link': function () {
    Session.set('register', true);
    Session.set('signin', false);
    Session.set('forgot', false);
    document.title = "Register | CrowdFund";
  },
  'click #signin-link': function () {
    Session.set('register', false);
    Session.set('signin', true);
    Session.set('forgot', false);
    document.title = "Sign in | CrowdFund";
  },
  'click #forgot-link': function () {
    Session.set('register', false);
    Session.set('signin', false);
    Session.set('forgot', true);
    document.title = "Password Recovery | CrowdFund";
  }
});

document.onkeypress = function (e) {
  if (e.keyCode === 13) {
    if (document.getElementById('signin')) {
      document.getElementById('signin').click();
    }
    else if (document.getElementById('register')) {
      document.getElementById('register').click();
    }
    else if (document.getElementById('reset')) {
      document.getElementById('reset').click();
    }
    else if (document.getElementById('change')) {
      document.getElementById('change').click();
    } 
  }
}