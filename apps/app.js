$(function(){
    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        //alert(searchTerm);
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm){
    //alert(searchTerm);
    var params = {
        s: searchTerm,
        r: 'json'
    };
    url = 'http://www.omdbapi.com';

    $.getJSON(url, params, function(data){
        //console.log(data);
        showResults(data.Search);
    });
}
function showResults(results){
    console.log(results);
    var output= "";
    $.each(results, function(index,value){
        output += '<p>' + value.Title + '</p>';
        //console.log(value.Title);
    });
    $('#search-results').html(output);
}


