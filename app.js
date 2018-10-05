var myApp = angular.module('myApp',[]);

myApp.controller('myAppController', function($scope, $http){
	$scope.posts = [];

	$http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(function(response){
		$scope.top_stories = response.data;

		if ($("#page-one-news")) {
			for(var i=0;i<(($scope.top_stories.length)/5);++i){
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
					$scope.posts.push(response.data);
				});
			}
		}else if ($("#page-two-news")) {
			for(var i=(($scope.top_stories.length)/5);i<((($scope.top_stories.length)/5)*2);++i){
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
					$scope.posts.push(response.data);
				});
			}
		}else if ($("#page-three-news")) {
			for(var i=((($scope.top_stories.length)/5)*2);i<((($scope.top_stories.length)/5)*3);++i){
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
					$scope.posts.push(response.data);
				});
			}
		}else if ($("#page-four-news")) {
			for(var i=((($scope.top_stories.length)/5)*3);i<((($scope.top_stories.length)/5)*4);++i){
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
					$scope.posts.push(response.data);
				});
			}
		}else if ($("#page-five-news")) {
			for(var i=((($scope.top_stories.length)/5)*4);i<($scope.top_stories.length);++i){
				$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
					$scope.posts.push(response.data);
				});
			}
		}
		/*for(var i=0;i<$scope.top_stories.length;++i){
			$http.get('https://hacker-news.firebaseio.com/v0/item/' + $scope.top_stories[i] + '.json?print=pretty').then(function(response){
				$scope.posts.push(response.data);
			});
		}*/
	});
});
