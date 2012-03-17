/* 
 jQuery Mobile Boilerplate
 application.js
 */

githubModel = {
  user : ko.observable( "MichaelMartinez" ),
  pass : ko.observable( "" ),
  watched : ko.observableArray( [] ),
  myRepos : ko.observableArray( [] ),
  myFollowers : ko.observableArray( [] ),
  iamFollowing : ko.observableArray( [] )
};

function getuserRepo() {
  var repoHtml = "";
  gh.user( githubModel.user() ).repos( function ( data ) {
    if ( githubModel.myRepos().length === 0 ) {
      githubModel.myRepos().push( data.repositories );

    }
    $.each( data.repositories, function ( i, rep ) {
      repoHtml += '<li>' +
        '<h3>' + this.name + '</h3>' + '<span class="ui-li-count">' +
        'Forks: ' + this.forks + ' -|- ' + 'Issues: ' + this.open_issues +
        ' -|- ' + 'Watchers: ' + this.watchers + '</span> ' +
        '<ul data-role="listview" data-inset="true">' +
        '<li>' + 'Description: ' + this.description + '</li>' +
        '<li>' + 'Language: ' + this.language + '</li>' +
        '<li>' + 'Updated: ' + this.pushed_at + '</li>' +
        '<li>' + 'Owner: ' + this.owner + '</li>' +
        '<li><a href="' + this.url + '">' + 'Git Page' + '</a></li>' +
        '</ul>' +
        '</li>';
    } );
    $( '#userRepo' ).empty().append( repoHtml ).listview( "refresh" );
  } );
}

function getIssues() {
  gh.user();
}

function getuserFollowing() {
  var followingHtml = "";
  gh.user( githubModel.user() ).following( function ( data ) {
    if ( githubModel.iamFollowing().length === 0 ) {
      githubModel.iamFollowing().push( data.users );
    }
    $.each( data.users, function ( i, rep ) {
      followingHtml += '<li>' + 'users: ' + this + '</li>'
    } );
    $( '#userFollowing' ).empty().append( followingHtml ).listview( "refresh" );
  } );
}

function getuserFollowed() {
  var followerHtml = "";
  gh.user( githubModel.user() ).followers( function ( data ) {
    if ( githubModel.myFollowers().length === 0 ) {
      githubModel.myFollowers().push( data.users );
    }
    $.each( data.users, function ( i, rep ) {
      followerHtml += '<li>' + 'users: ' + this + '</li>';

    } );
    $( '#userFollowed' ).empty().append( followerHtml ).listview( "refresh" );
  } );
}
function getWatched() {
  var myHtml = "";
  var index = 0;
  gh.user( githubModel.user() ).watching( function ( data ) {
    console.log( data.repositories );

    if ( githubModel.watched().length === 0 ) {
      $.each( data.repositories, function ( i, item ) {
        githubModel.watched.push( item );
      } )
    }

    $.each( data.repositories, function ( i, rep ) {
      myHtml += '<li>' +
        '<h3>' + this.name + '</h3>' + '<p>' + 'Description: '
        + this.description + '</p>' +
        '<span class="ui-li-count">' + 'Forks: ' + this.forks
        + ' -|- ' + 'Issues: ' + this.open_issues + ' -|- '
        + 'Watchers: ' + this.watchers + '</span> ' +
        '<ul data-role="listview" data-inset="true">' +
        '<li>' + 'Description: ' + this.description + '</li>' +
        '<li>' + 'Language: ' + this.language + '</li>' +
        '<li>' + 'Updated: ' + this.pushed_at + '</li>' +
        '<li>' + 'Owner: ' + this.owner + '</li>' +
        '<li><a href="' + this.url + '">' + 'Git Page' + '</a>' + '</li>' +
        '</ul>' +
        '</li>';
    } );
    $( '#watched' ).empty().append( myHtml ).listview( "refresh" );
  } );

}

function getuserData() {
  getuserRepo();
  getuserFollowing();
  getuserFollowed();
  getWatched();
}


$( document ).ready( function () {

  ko.applyBindings( githubModel );


} );
