Template.project.events({
  "click .edit": function () {
    var path = '/projects/' + this.slug + '/edit';
    Router.go(path);
  },
  "click .delete": function () {
    if (confirm("Are you sure you want to delete this?")){
      Meteor.call("deleteProject", this._id);
    }
  },
  "click .fa-chevron-up": function () {
    Meteor.call("upvoteProject", this._id);
  },
  "click .fa-chevron-down": function () {
    Meteor.call("downvoteProject", this._id);
  },
    "click .js-rate-project" : function (event) {
        var rating = $(event.currentTarget).data('userrating');
        console.log(rating);
        var image_id = this.id;
        console.log(image_id);
        Projects.update({_id: image_id}, { $set: { rating: rating }});
    }
});

Template.project.helpers({
  isOwner: function () {
    return this.ownerId === Meteor.userId();
  },
  submittedAgo: function() {
    return moment(this.createTimeActual, moment.ISO_8601).fromNow();
  }
});
