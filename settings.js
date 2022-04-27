function applySettings() {
    var settings_data = [
        {"private": privateSchools},
        {"religious": religiousAffiliated},
        {"inclusive": inclusiveHousing},
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
