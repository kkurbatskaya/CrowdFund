document.title = "CrowdFund";

Template.nav.helpers({
  username: function () {
    return Meteor.user().username;
  }
})



Template.nav.events({
  'click #signout': function () {
    Meteor.logout();
    Meteor.logoutOtherClients();
    window.location = '/';
    document.title = "CrowdFund";
  },
  'click #portal': function () {
    document.title = 'Portal | CrowdFund';
  },
  'click #profile': function () {
    document.title = 'Profile | CrowdFund';
  },
  'click #settings': function () {
    document.title = 'Settings | CrowdFund';
  }
});



$(window).resize(function () {
  var path = $(this);
  var contW = path.width();
  if (contW >= 751) {
    document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
  } else {
    document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
  }
});

$(document).ready(function () {
  $('.dropdown').on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  $('.dropdown').on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
  });

  $("#menu-toggle").click(function (e) {
    var elem = document.getElementById("sidebar-wrapper");
    left = window.getComputedStyle(elem,null).getPropertyValue("left");
    if (left === "250px") {
      document.getElementsByClassName("sidebar-toggle")[0].style.left="-250px";
    }
    else if (left === "-250px") {
      document.getElementsByClassName("sidebar-toggle")[0].style.left="250px";
    }
    else {
      document.getElementsByClassName("sidebar-toggle")[0].style.left="250px";
    }
  });
});

