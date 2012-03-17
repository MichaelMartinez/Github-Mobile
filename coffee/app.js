(function() {
  var getIssues, getWatched, getuserFollowed, getuserFollowing, getuserRepo, githubModel;

  getuserRepo = function() {
    var repoHtml;
    repoHtml = "";
    return gh.user(githubModel.user()).repos(function(data) {
      if (githubModel.myRepos().length === 0) {
        githubModel.myRepos().push(data.repositories);
      }
      $.each(data.repositories, function(i, rep) {
        return repoHtml += "<li>" + "<h3>" + this.name + "</h3>" + "<span class=\"ui-li-count\">" + "Forks: " + this.forks + " -|- " + "Issues: " + this.open_issues + " -|- " + "Watchers: " + this.watchers + "</span> " + "<ul data-role=\"listview\" data-inset=\"true\">" + "<li>" + "Description: " + this.description + "</li>" + "<li>" + "Language: " + this.language + "</li>" + "<li>" + "Updated: " + this.pushed_at + "</li>" + "<li>" + "Owner: " + this.owner + "</li>" + "<li><a href=\"" + this.url + "\">" + "Git Page" + "</a></li>" + "</ul>" + "</li>";
      });
      return $("#userRepo").empty().append(repoHtml).listview("refresh");
    });
  };

  getIssues = function() {
    return gh.user();
  };

  getuserFollowing = function() {
    var followingHtml;
    followingHtml = "";
    return gh.user(githubModel.user()).following(function(data) {
      if (githubModel.iamFollowing().length === 0) {
        githubModel.iamFollowing().push(data.users);
      }
      $.each(data.users, function(i, rep) {
        return followingHtml += "<li>" + "users: " + this + "</li>";
      });
      return $("#userFollowing").empty().append(followingHtml).listview("refresh");
    });
  };

  getuserFollowed = function() {
    var followerHtml;
    followerHtml = "";
    return gh.user(githubModel.user()).followers(function(data) {
      if (githubModel.myFollowers().length === 0) {
        githubModel.myFollowers().push(data.users);
      }
      $.each(data.users, function(i, rep) {
        return followerHtml += "<li>" + "users: " + this + "</li>";
      });
      return $("#userFollowed").empty().append(followerHtml).listview("refresh");
    });
  };

  getWatched = function() {
    var index, myHtml;
    myHtml = "";
    index = 0;
    return gh.user(githubModel.user()).watching(function(data) {
      console.log(data.repositories);
      if (githubModel.watched().length === 0) {
        $.each(data.repositories, function(i, item) {
          return githubModel.watched.push(item);
        });
      }
      $.each(data.repositories, function(i, rep) {
        return myHtml += "<li>" + "<h3>" + this.name + "</h3>" + "<p>" + "Description: " + this.description + "</p>" + "<span class=\"ui-li-count\">" + "Forks: " + this.forks + " -|- " + "Issues: " + this.open_issues + " -|- " + "Watchers: " + this.watchers + "</span> " + "<ul data-role=\"listview\" data-inset=\"true\">" + "<li>" + "Description: " + this.description + "</li>" + "<li>" + "Language: " + this.language + "</li>" + "<li>" + "Updated: " + this.pushed_at + "</li>" + "<li>" + "Owner: " + this.owner + "</li>" + "<li><a href=\"" + this.url + "\">" + "Git Page" + "</a>" + "</li>" + "</ul>" + "</li>";
      });
      return $("#watched").empty().append(myHtml).listview("refresh");
    });
  };

  window.getuserData = function() {
    getuserRepo();
    getuserFollowing();
    getuserFollowed();
    getWatched();
  };

  githubModel = {
    user: ko.observable("MichaelMartinez"),
    pass: ko.observable(""),
    watched: ko.observableArray([]),
    myRepos: ko.observableArray([]),
    myFollowers: ko.observableArray([]),
    iamFollowing: ko.observableArray([])
  };

  $(document).ready(function() {
    ko.applyBindings(githubModel);
  });

}).call(this);
