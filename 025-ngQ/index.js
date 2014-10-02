'use strict';


var app = angular.module('multiple-requests', []);


app.controller('AppCtrl', function (githubService) {
  var app = this;

  githubService.getAngularInfo().then(function (angularInfo) {
    console.log(angularInfo);
    app.angularInfo = angularInfo;
  });
});


app.service('githubService', function GithubService ($http, $q) {
  var githubService, user, repos, events;

  githubService = this;
  user = 'https://api.github.com/users/angular';
  repos = 'https://api.github.com/users/angular/repos';
  events = 'https://api.github.com/users/angular/events';

  githubService.getUser = function getUser () {
    return $http.get(user).then(function onResponse (res) {

      return {
        name: res.data.name,
        avatarUrl: res.data.avatar_url,
        repoCount: res.data.public_repos
      };
    });
  };

  githubService.getRepos = function getRepos () {
    return $http.get(repos).then(function onResponse (res) {
      return _.map(res.data, function (data) {
        return {
          name: data.name,
          description: data.description,
          stars: data.stargazers_count,
          isFork: data.fork
        };
      });
    });
  };

  githubService.getEvents = function getEvents () {
    return $http.get(events).then(function onResponse (res) {
      return _.map(res.data, function (data) {
        return {
          type: data.type,
          user: data.actor.login,
          avatarUrl: data.actor.avatar_url,
          createdOn: data.created_at,
          repo: data.repo.name
        };
      });
    });
  };

  githubService.getAngularInfo = function getAngularInfo () {
    var promise_user, promise_repos, promise_events;

    promise_user = githubService.getUser();
    promise_repos = githubService.getRepos();
    promise_events = githubService.getEvents();

    return $q.all([promise_user, promise_repos, promise_events]).then(function (data) {
      var user, repos, events;

      user = data[0];
      repos = data[1];
      events = data[2];

      return _.extend(user, { events: events, repos: repos });
    });

  };
});
