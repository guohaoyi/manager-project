( function()  {
    angular.module("project-manager", ['ngRoute']);
    
    var service = function()  {
        return [
            {
                student: {
					name: "Joe Blake",
                    grade: "B  92%";
                },
                teacher: {
                    name: "Dr. Bradshaw"
                },
                assignments: [
                {
                    title: "Design Login",
                    progress: "D",
                    dueDays: "2",
                    description: "this is the project description",
                    group: ["JB", "MH", "RA", "BR", "JG"],
                    graded: true,
                    grade: "A"
                },
                    {
                    title: "Home Page",
                    progress: "P",
                    dueDays: "1",
                    description: "this is the project description",
                    group: ["BJ", "WS", "RA", "BR", "JG"],
                    graded: true,
                    grade: "A"
                },
                    {
                    title: "Group Page",
                    progress: "I",
                    dueDays: "-3",  //negative means pass due date
                    description: "this is the project description",
                    group: ["JB", "MH", "RA", "BR", "JG"],
                    graded: true,
                    grade: "B"
                },
                    {
                    title: "Grades Page",
                    progress: "P",
                    dueDays: "4",
                    description: "this is the project description",
                    group: ["JB", "MH", "RA", "BR", "JG"],
                    graded: false
                },
                    {
                    title: "Design Login",
                    progress: "D",
                    dueDays: "1",
                    description: "this is the project description",
                    group: ["JB", "MH", "RA", "BR", "JG"],
                    graded: true,
                    grade: "A"
                },
                    {
                    title: "Design Login",
                    progress: "D",
                    dueDays: "1",
                    description: "this is the project description",
                    group: ["JB", "MH", "RA", "BR", "JG"],
                    graded: true,
                    grade: "A"
                },
                    
                    ],
                users: [
                    {
                        name: "Josh Boldt",
                        summary: "summary of Josh",
                        tasks: ["Design Login", "Code Login"]
                    },
                    {
                        name: "Morgan Hites",
                        summary: "summary of Morgan",
                        tasks: ["Design Login", "Code Login"]
                    },
                    {
                        name: "Ryland Atinks",
                        summary: "summary of Ryland",
                        tasks: ["Home Page", "Group Page"]
                        
                    },
					{
						name: "Joe Blake",
						summary: "summary of Joe",
						tasks: ["Design Login", "Grades Page"]
					}
                    
                ]
            }
        ];
    };
    
	var mainController = function($scope, service, $location)  {
		$scope.name = service[0].student.name;
		$scope.assignments = service[0].assignments;
		$scope.users = service[0].users;
		
		$scope.loginType = function(){
			if ($scope.email == "professor@centre.edu")
				{
					$location.path("teacherHome")
				}
			else if($scope.email == "student@centre.edu")
				{
					$location.path("studenthome")
				}
		}
	}
	
	var router = function($routeProvider) {
		$routeProvider
		.when("/",
			 {
			templateUrl: "login.html",
			controller: "mainController"
		})
		.when("/student",
			 {
			templateUrl: "studenthome.html",
			controller: "mainController"
		})
		.when("/teacher",
			 {
			templateUrl: "teacherHome.html",
			controller: "mainController"
		})
		.otherwise({redirectTo:"/register.html"});
	};
	
	angular.module("project-manager")
	.controller("mainController", mainController)
	.config(["$routeProvider", router])
	.service("service", service);
	
	
	

})();