(function() {
    angular.module("manager", ['ngRoute']);
    
    var studentHomeModelF = function() {
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
    
    var studentGroupsModelF = function() {
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
    
    var studentGradesModelF = model() {
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
    
    var studentHomeController = function($scope, $location, studentHomeModel, studentGroupsModel, studentGradesModel, studentAssignmentsModel) {
        $scope.student = studentHomeModel;
        $scope.groups = studentGroupsModel;
        $scope.grades = studentGradesModel;
        $scope.assignment = studentAssignmentsModel;
        var model = [];
        for (var i = 0; i < studentGroupsModel.length; i++) {
            model.push(studentGroupsModel[i]);
        };
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
        });
    };
    
    angular.module("manager")
    .controller("studentHomeController",studentHomeController)
    .controller("studentGroupsController",studentGroupsController)
    .controller("studentGradesController",studentGradesController)
    .controller("studentAssignmentsController",studentAssignmentsController)
    .config(["$routeProvider", routingConfig])
    .service("studentHomeModel",studentHomeModelF)
    .service("studentGroupsModel",studentGroupsModelF)
    .service("studentGradesModel",studentGradesModelF)
    .service("studentAssignmentsModel",studentAssignmentsModelF);
    
    
})();