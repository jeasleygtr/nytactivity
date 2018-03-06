// function for search button
console.log("working");
$('.btn-primary').on('click', function(){
    event.preventDefault();
    console.log("you clicked the button");

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var q = $("#inputSearchTerm").val().trim();
    var begin_date = $('#startYear').val().trim() + "0101";
    var end_date = $('#endYear').val().trim() + "0101";
    // need variable for amount of records to retrieve
    // inn
    url += '?' + $.param({
    'api-key': "3b432ace2fdd4dee8d19548431589a02",
    'q': q,
    'begin_date': begin_date,
    'end_date': end_date,
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function(results){
        console.log(results.response.docs[0].headline.main);
        // for loop to display x number of records

    });
});

// function for clear results
$('.btn-secondary').on('click', function(){
    $('#return-field').empty();
});
