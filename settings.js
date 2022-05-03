function applySettings() {
    var filterValues = [];

    $("apply").click(function(e) {
        e.preventDefault();

        $("input[name='filters']:checked").each(function() {
            filterValues.push($(this).val());
        });
        
        $.ajax({
            type: "POST",
            url: "/filters",
            data: JSON.stringify(filterValues),
            contentType: "application/json",
            dataType: 'html' 
        });
    });
}

