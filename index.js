function loadData() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'data/data.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var data = JSON.parse(xhr.responseText);
            } catch (e) {
                alert("Incorrect answer " + e.message);
            }
            showData(data);
        }

    };

    xhr.send();

    button.innerHTML = 'Downloading...';
    button.disabled = true;
}

function showData(data) {

    data.forEach(function(dat) {
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = dat.name;
    });

}