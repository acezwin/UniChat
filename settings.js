function applySettings() {
    var settings_data = [
        {"private": privateSchools},
        {"religious": religiousSchools},
        {"elite": eliteSchools}
    ]

    $.ajax({
        type: "POST",
        url: "/filters",
        data: JSON.stringify(settings_data),
        contentType: "application/json",
        dataType: 'json' 
    });
}
