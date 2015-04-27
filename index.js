function buildTree(data, hidden) {
    var $root = $("<ul></ul>");

    if (hidden) {
        $root.addClass('hide');
    }

    for (var i = 0; i < data.length; i++ ) {
        var $elem = $("<li></li>");

        if (data[i].children && data[i].children.length) {
            $span = $("<span></span>").addClass("plus").text(data[i].name);
            $elem.html($span).append(buildTree(data[i].children, true));
        } else {
            $elem.text(data[i].name);
        }

        $root.append($elem);
    }

    return $root;
}

var $tree = $("#tree");

$("#treeBuilder").click(function(){
    $.getJSON('data.json', function(response){
        $tree.html(buildTree(response, false));
    })
});

$tree
    .on("click", ".plus, .minus", function(){
        $(this).toggleClass("plus").toggleClass("minus");
    });
