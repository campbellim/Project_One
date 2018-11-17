var queryURL = "cashmusic.org/venuses/" + userInput
ajax({
    url: queryURL,
    method: "GET"
     
    
})
.done(function(response){
    var results= response.data
    results['results']
})