var imageUrl, responseData;
//array for topic, my topic is also animals (how creative)
$(document).ready(function () {
var animals = ["Dog", "Cat", "Tiger", "Monkey", "Sloth", "Giraffe", "Bird", "Donkey", "Raccoon", "Panda"];

function alertAnimalName(){  };

//need a function to render buttons. Homework suggests using a loop to go through the array
function renderButtons (){

  //avoid repeat buttons  
$("#animal-Buttons").empty();

//create loop
for (var i=0; i<animals.length; i++)
{
    //generate button
    var ab= $("<button>");
    //add class to buttons
    ab.addClass("animal");
    //add data attribute (not sure why but we did this in a previous activity)
    ab.attr("data-name", animals[i]);
    //generate text for button from array
    ab.text(animals[i]);
    //append buttons
    $("#animal-Buttons").append(ab);  


}
    $("#animal-Buttons button").on("click", function() 
    
    {
    
    $("#images").empty();
    

    // creates a variable for the image search
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FT79lMtvzGCwg7NZYGS8Qd1bkn19VQ51&limit=10&q=" + $(this).data("name");
    
   
    // gets image from the api
    $.ajax({
    url: queryURL,
    method: "GET"})
   

     //calls out 
     .then(function(response) 
     
      {
              //variable for the image
// response.data.length
              //loop begin 1-10
            //   var responseData = response.data;
              for(j=0; j<response.data.length; j++){

               imageUrl = response.data[j].images.fixed_width_still.url;
              console.log(response.data);
   
              //create image element to drop animal images into
              var animalImage = $("<img>");
   
              //replace image src with url for gif
              animalImage.attr("src", imageUrl);
        
              //alt image description
              animalImage.attr("alt", "Animal image");
   
              //append image of animal selected
              $("#images").append(animalImage);
// loop end
  }
             

      }) //end of .then function
    
     }) //end of on click function

}; //end of render buttons


// This function handles events where one button is clicked
   $("#add-animal").on("click", function(event) {
   event.preventDefault();


        // This line grabs the input from the textbox
   var ani = $("#animal-input").val().trim();

        // The movie from the textbox is then added to our array
        animals.push(ani);

        // Calling renderButtons which handles the processing of our movie array
     renderButtons();
     return false;
    }); //end of click event add animal button


    //click function for animal class buttons
     $(document).on("click", ".animal", alertAnimalName);

     // Calling the renderButtons function to display the intial buttons
      renderButtons(); 
    
      
    






    }) //document ready don't touch