var myApp = angular.module('myApp',['angularUtils.directives.dirPagination']);

myApp.controller('myAppController', function($scope, $http){
	$scope.posts = [];

	$http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(function(response){
		$scope.top_stories = response.data;
		for(var i=0;i<$scope.top_stories.length;++i){
			$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
				$scope.posts.push(response.data);
			});
		}
	});
});
