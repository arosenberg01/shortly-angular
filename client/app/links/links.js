angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();
})

.directive('ngLinks', function() {
  return {
    restrict: 'EA',
    template: '<div class="link" ng-repeat="link in data.links | filter:searchText | orderBy: \'-visits\'"> \
    <img src=\'../assets/redirect_icon.png\'/> \
    <div class="info"> \
      <div style="display: inline;"><a href="{{ \'api/links/\' + link.code }}">{{ link.code }}</a></div> \
      <div style="display: inline;">{{ link.url }}</div> \
      <div class="visits" ><span class="count">{{ link.visits }}</span></div> \
    </div> \
    </div>'

  }
});

   