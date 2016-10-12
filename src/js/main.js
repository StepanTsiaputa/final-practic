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
    
var input_email = document.getElementById("input_email");
var form_info = document.getElementById("input_form");

    if(form_info){
        form_info.addEventListener("submit", function(){
            toastr.success('Message Send!!');
            event.preventDefault();
        })
    }
input_email.addEventListener("submit", function(){
    toastr.success('The information was sand to your email!!');
    event.preventDefault();
});
} );

