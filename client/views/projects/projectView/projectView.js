Template.projectView.events({
  "click .edit": function () {
    var path = '/projects/' + this.slug + '/edit';
    Router.go(path);
  },
  "click .delete": function () {
    if (confirm("Are you sure you want to delete this?")){
      Meteor.call("deleteProject", this._id);
    }
  },
  'click #submit-comment': function () {
    var text = document.getElementById('comment-box').value;
    Meteor.call('addProjectComment', this._id, 0, text);
  },
  'click #fund': function () {
    bootbox.dialog({
      title: this.title,
      message: '<div class="row">  ' +
      '<div class="col-md-12"> ' +
      '<h3>Let\'s choose your reward!</h3>' + 
      '</div> </div>',
      buttons: {
        success: {
          label: "Continue",
          className: "btn-success",
          callback: function () {
            var name = $('#name').val();
            var answer = $("input[name='awesomeness']:checked").val()
          }
        }
      }
    }
    );
  },
    "click .js-rate-project" : function (event) {
        var rating = $(event.currentTarget).data('userrating');
        console.log(rating);
        var image_id = this.id;
        console.log(image_id);
        Projects.update({_id: image_id}, { $set: { rating: rating }});
    },
});

Template.projectView.helpers({
  isOwner: function () {
    return this.ownerId === Meteor.userId();
  },
  projectComments: function () {
    return Comments.find({projectId:this._id});
  },
  submittedAgo: function () {
    return moment(this.createTimeActual, moment.ISO_8601).fromNow();
  },
  numComments: function () {
    var numComments = Comments.find({projectId: this._id}).count();
    if (numComments === 1) {
      return '1 comment';
    }
    else
      return numComments + ' comments';
  },
  processedTags: function () {
    var oldTags = this.tags;
    var newTags = [oldTags.length];
    var processedTags = '';

    for (var i = 0; i < oldTags.length; i++) {
      newTags[i] = '<a href="#">#' + oldTags[i] + '</a> ';
    }

    for (var k = 0; k < oldTags.length; k++) {
      processedTags = processedTags + newTags[k] + ' ';
    }
    
    return processedTags;
  }
});