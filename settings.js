$(document).ready(function() {
    $("#filterForm").submit(function(e) {
        e.preventDefault();

        //for testing
        alert("submitted");
        var filterValues = [];

        $("input[name='filters']:checked").each(function () {
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
});



