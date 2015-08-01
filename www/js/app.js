// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' , 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.controller('StarterCtrl' , function( $scope ){
  //debugger;
  var myDatabaseRef = new Firebase('https://vivid-inferno-2942.firebaseio.com/')
    $scope.addNews = function(){
      var name = $('#nameInput').val();
      var url = $('#emailInput').val();
      var description = $('#descriptionInput').val();
      myDatabaseRef.push({Name: name , Url: url , Description: description});
      $('#nameInput').val('');
      $('#emailInput').val('');
      $('#descriptionInput').val(' ');
      //alert('done');
        window.location="./display.html";
    }, 


    $scope.init = function()
    {
        //debugger;
        //alert("Hello World");
       // Get a database reference to our posts
        var ref = new Firebase("https://vivid-inferno-2942.firebaseio.com/");
      // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      var msg =  snapshot.val();
      var i=0;
      for (var prop in msg) {
      
        console.log(prop);
        $('#sp-table').append("<tr><td>"+ msg[prop].Name + "</td> <td>" + msg[prop].Description + " </td></tr>")
      
      }
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }); 
      }

  
})

//.controller('StarterCtrl' , function( $scope ){

    
//  })