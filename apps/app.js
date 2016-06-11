$(function(){
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
        showResults(data.Search);
    });
});

function showResults(results){
    var html="";
    $.each(results, function(index,value){
        html += '<p>' + value.Title + '</p>'
        console.log(value.Title);
    });
    $('#search-results').html(html);
}


