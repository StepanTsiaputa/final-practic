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

var form_btn = document.getElementById("form_info_btn"),
    input_email = document.getElementById("input_email");

form_btn.addEventListener("click", function(){
    toastr.info('Message Send!!');
    event.preventDefault();
});
console.log(form_btn);
input_email.addEventListener("submit", function(){
    toastr.info('The information was sand to your email!!');
    event.preventDefault();
});
