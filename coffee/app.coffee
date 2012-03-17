getuserRepo = ->
  repoHtml = ""
  gh.user(githubModel.user()).repos (data) ->
    githubModel.myRepos().push data.repositories  if githubModel.myRepos().length is 0
    $.each data.repositories, (i, rep) ->
      repoHtml += "<li>" + "<h3>" + @name + "</h3>" + "<span class=\"ui-li-count\">" + "Forks: " + @forks + " -|- " + "Issues: " + @open_issues + " -|- " + "Watchers: " + @watchers + "</span> " + "<ul data-role=\"listview\" data-inset=\"true\">" + "<li>" + "Description: " + @description + "</li>" + "<li>" + "Language: " + @language + "</li>" + "<li>" + "Updated: " + @pushed_at + "</li>" + "<li>" + "Owner: " + @owner + "</li>" + "<li><a href=\"" + @url + "\">" + "Git Page" + "</a></li>" + "</ul>" + "</li>"

    $("#userRepo").empty().append(repoHtml).listview "refresh"
getIssues = ->
  gh.user()
getuserFollowing = ->
  followingHtml = ""
  gh.user(githubModel.user()).following (data) ->
    githubModel.iamFollowing().push data.users  if githubModel.iamFollowing().length is 0
    $.each data.users, (i, rep) ->
      followingHtml += "<li>" + "users: " + this + "</li>"

    $("#userFollowing").empty().append(followingHtml).listview "refresh"
getuserFollowed = ->
  followerHtml = ""
  gh.user(githubModel.user()).followers (data) ->
    githubModel.myFollowers().push data.users  if githubModel.myFollowers().length is 0
    $.each data.users, (i, rep) ->
      followerHtml += "<li>" + "users: " + this + "</li>"

    $("#userFollowed").empty().append(followerHtml).listview "refresh"
getWatched = ->
  myHtml = ""
  index = 0
  gh.user(githubModel.user()).watching (data) ->
    console.log data.repositories
    if githubModel.watched().length is 0
      $.each data.repositories, (i, item) ->
        githubModel.watched.push item
    $.each data.repositories, (i, rep) ->
      myHtml += "<li>" + "<h3>" + @name + "</h3>" + "<p>" + "Description: " + @description + "</p>" + "<span class=\"ui-li-count\">" + "Forks: " + @forks + " -|- " + "Issues: " + @open_issues + " -|- " + "Watchers: " + @watchers + "</span> " + "<ul data-role=\"listview\" data-inset=\"true\">" + "<li>" + "Description: " + @description + "</li>" + "<li>" + "Language: " + @language + "</li>" + "<li>" + "Updated: " + @pushed_at + "</li>" + "<li>" + "Owner: " + @owner + "</li>" + "<li><a href=\"" + @url + "\">" + "Git Page" + "</a>" + "</li>" + "</ul>" + "</li>"

    $("#watched").empty().append(myHtml).listview "refresh"
window.getuserData = ->
  getuserRepo()
  getuserFollowing()
  getuserFollowed()
  getWatched()
  return

githubModel =
  user: ko.observable("MichaelMartinez")
  pass: ko.observable("")
  watched: ko.observableArray([])
  myRepos: ko.observableArray([])
  myFollowers: ko.observableArray([])
  iamFollowing: ko.observableArray([])

$(document).ready ->
  ko.applyBindings githubModel
  return