$(document).ready(function() {
    $.getJSON("js/data.json", function(data){
       $('#table_people').DataTable({
        "data": data,
        "columns": [
            { "data": "Full Name" },
            { "data": "Country" },
            { "data": "Email"}
        ]
        });
    })
    
} );

var form_info = document.getElementById("form_info");

form_info.addEventListener("click", function(){
    toastr.info('Message Send!!');
    event.preventDefault();
})
