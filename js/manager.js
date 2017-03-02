( function()
{
    angular.module("pokedex",['ngRoute']);

    var pokedexModelF = function()
    {
	return [
	    {
		name:"Abra",
		description :"Telports away",
		img:"http://web.centre.edu/michael.bradshaw/catchem/abra.png",
		cool:true
	    },
	    {
		name:"Bee Drill",
		description: "Bee with Drills",
		img:"http://web.centre.edu/michael.bradshaw/catchem/beedrill.png",
		cool:false
	    },
	    {
		name:"Rattata",
		description:"The only animal in pokemon Go",
		img:"http://web.centre.edu/michael.bradshaw/catchem/rattata.png",
		cool:true
	    }
	];



    };



    var pokedexController = function($scope,$location,pokedexModel)
    {

	$scope.pokedex = pokedexModel;
	$scope.showCool = true;

	$scope.addPokemon = function()
	{
	    $location.path("addPokemon");
	}

    }

//directive

    var myFooter = function()
    {
	return {
	    templateUrl:"myFooter.html"
	    };
    }


    var pokemonSummary = function()
    {
	return {
	    scope:{mon: "=monster"},
	    templateUrl:"pokemonSummary.html"
	    };
    };

 var pokemonDetail = function()
    {
	return {
	    scope:{mon: "=monster"},
	    templateUrl:"pokemonDetail.html"
	    };
    };

   


    var pokemonController = function($scope,$routeParams,pokedexModel)
    {

	$scope.mon = 
	    pokedexModel.find(function(element)
	    {
		return element.name == 	$routeParams.monid;
	    });
    }


    var addPokemonController = function($scope,$location,pokedexModel)
    {
	$scope.monster = {name:"new poke",
			  img:"http://web.centre.edu/michael.bradshaw/catchem/beedrill.png",
			 description:"please change",
			  cool:true};
	

	$scope.backHome = function()
	{
	    $location.path("/");
	}

	$scope.storeMonster = function()
	{
	    pokedexModel.push($scope.monster);
	    $scope.backHome();	    
	}
	

    }


    var routingConfig = function($routeProvider)
    {

	$routeProvider
	.when("/",
	      {
		  templateUrl:"pokemon.html",
		  controller:"pokedexController"
	      })
	.when("/pokemon/:monid",
	      {
		  templateUrl:"pokemonDetail.html",
		  controller:"pokemonController"
	      })
	.when("/addPokemon",
	      {
		  templateUrl:"pokemonAdd.html",
		  controller:"addPokemonController"
	      })


	.otherwise({redirectTo:"/badlink"});
    };




    angular
    .module("pokedex")
    .controller("pokedexController",pokedexController)
    .controller("pokemonController",pokemonController)
    .controller("addPokemonController",addPokemonController)
    .directive("myFooter",myFooter)
    .directive("pokemonSummary",pokemonSummary)
    .directive("pokemonDetail",pokemonDetail)
    .config(['$routeProvider',routingConfig])
    .service("pokedexModel",pokedexModelF);




})();