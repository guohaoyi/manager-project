(function() {
    angular.module("manager", ['ngRoute']);
    
    var studentHomeModelF = function() {
        return {
            name: "Haoyi Guo",
            grade: "A",
            numgrade: 93
        };
    };
    
    var studentGroupsModelF = function() {
        return [
            {
                number: 1,
                name: "Login Page",
                type: "design",
                group: ["NM", "TN", "KY", "MS"],
                url: "centre.edu"
            },
            {
                number: 2,
                name: "Code",
                type: "design",
                group: ["NM", "TN", "KY", "MS"],
                url: "centre.edu"
            },
            {
                number: 3,
                name: "Code",
                type: "design",
                group: ["NM", "TN", "KY", "MS"],
                url: "centre.edu"
            },
            {
                number: 4,
                name: "Code",
                type: "design",
                group: ["NM", "TN", "KY", "MS"],
                url: "centre.edu"
            }
        ]
    };
    
    var studentGradesModelF = function() {
        return [
            {
                number: 1,
                name: "Login Page"
            },
            {
                number: 2,
                name: "Home Page"
            }
        ]
    };
    
    var studentAssignmentsModelF = function() {
        return [
            {
                number: 1,
                name: "Login Page"
            },
            {
                number: 2,
                name: "Home Page"
            }
        ]
    };
    
    var myHeader = function() {
        return {
            templateUrl:"myHeader.html"
        };
    };
    
    var studentHomeController = function($scope, $location, studentHomeModel, studentGroupsModel, studentGradesModel, studentAssignmentsModel) {
        $scope.student = studentHomeModel;
        $scope.grades = studentGradesModel;
        $scope.assignment = studentAssignmentsModel;
        var model = [];
        for (var i = 0; i < studentGroupsModel.length; i++) {
            model.push(studentGroupsModel[i]);
        };
        $scope.groups = model;
        $scope.goHome = function() {
            $location.path("/");
        };
        $scope.goGroups = function() {
            $location.path("/groups");
        };
        $scope.goGrades = function() {
            $location.path("/grades");
        };
        $scope.goAssignments = function() {
            $location.path("/assignments");
        };
    };
    
    var studentGroupsController = function($scope, $location, studentHomeModel, studentGroupsModel, studentGradesModel, studentAssignmentsModel) {
        $scope.student = studentHomeModel;
        $scope.groups = studentGroupsModel;
        $scope.goHome = function() {
            $location.path("/");
        };
        $scope.goGroups = function() {
            $location.path("/groups");
        };
        $scope.goGrades = function() {
            $location.path("/grades");
        };
        $scope.goAssignments = function() {
            $location.path("/assignments");
        };
    };
    
    var studentGradesController = function($scope, $location, studentHomeModel, studentGroupsModel, studentGradesModel, studentAssignmentsModel) {
        $scope.student = studentHomeModel;
        $scope.grades = studentGradesModel;
        $scope.goHome = function() {
            $location.path("/");
        };
        $scope.goGroups = function() {
            $location.path("/groups");
        };
        $scope.goGrades = function() {
            $location.path("/grades");
        };
        $scope.goAssignments = function() {
            $location.path("/assignments");
        };
    };
    
    var studentAssignmentsController = function($scope, $location, studentHomeModel, studentGroupsModel, studentGradesModel, studentAssignmentsModel) {
        $scope.student = studentHomeModel;
        $scope.assignment = studentAssignmentsModel;
        $scope.goHome = function() {
            $location.path("/");
        };
        $scope.goGroups = function() {
            $location.path("/groups");
        };
        $scope.goGrades = function() {
            $location.path("/grades");
        };
        $scope.goAssignments = function() {
            $location.path("/assignments");
        };
    };
    
    var routingConfig = function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl:"studentHome.html",
            controller:"studentHomeController"
        })
        .when("/groups", {
            templateUrl:"studentGroups.html",
            controller:"studentGroupsController"
        })
        .when("/grades", {
            templateUrl:"studentGrades.html",
            controller:"studentGradesController"
        })
        .when("/assignments", {
            templateUrl:"studentAssignments.html",
            controller:"studentAssignmentsController"
        })
        .otherwise({redirectTo:"/badlink"});
    };
    
    angular.module("manager")
    .controller("studentHomeController",studentHomeController)
    .controller("studentGroupsController",studentGroupsController)
    .controller("studentGradesController",studentGradesController)
    .controller("studentAssignmentsController",studentAssignmentsController)
    .directive("myHeader",myHeader)
    .config(["$routeProvider", routingConfig])
    .service("studentHomeModel",studentHomeModelF)
    .service("studentGroupsModel",studentGroupsModelF)
    .service("studentGradesModel",studentGradesModelF)
    .service("studentAssignmentsModel",studentAssignmentsModelF);
    
    
})();