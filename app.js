var myModule = angular.module('Angello',[]);
myModule.factory('AngelloHelper', function () {
	var buildIndex = function (source, property) {
        var tempArray = [];

        for (var i = 0, len = source.length; i < len; ++i) {
            tempArray[source[i][property]] = source[i];
        }

        return tempArray;
    };

    return {
        buildIndex: buildIndex
    };
});

myModule.service('AngelloModel', function() {
	var service = this;
	stories=[
		{
		title : 'First story',
		description: 'My first story description',
		criteria: 'Criteria pending',
		status: 'Back log',
		type: 'pending',
		reporter: 'Nik',
		assignee: 'Nik'
	},
	{
		title : 'Second story',
		description: 'My second story description',
		criteria: 'Criteria pending',
		status: 'Back log',
		type: 'pending',
		reporter: 'Nik',
		assignee: 'Nik'
	},
	{
		title : 'Another story',
		description: 'Another story description',
		criteria: 'Criteria pending',
		status: 'Back log',
		type: 'pending',
		reporter: 'Nik',
		assignee: 'Nik'
	}];

	service.getStrories = function(){
		return stories;
	}

} );

myModule.controller('MainCtrl', function(AngelloModel) {
	var main = this;
	main.stories = AngelloModel.getStrories();

	main.createStory = function() {
		main.stories.push({
			title : 'New story',
			description: 'Description pending',
			criteria: 'Criteria pending',
			status: 'Back log',
			type: 'pending',
			reporter: 'pending',
			assignee: 'pending'		
		})
	};



});
myModule.directive('story', function() {
	return {
	       scope: true,
	       replace: true,
	       template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
	}
});