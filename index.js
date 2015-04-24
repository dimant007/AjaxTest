

function loadData()
{
    var response;
    $.getJSON('data/data.json')
        .done(function(data){
            response = data;
        }).fail(function(){

        });

    return response;
}

function showData(data) {

    data.forEach(function(dat) {
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = dat.name;
    });

}