$("#input_email").validate({
       rules: {
           email: {
               required: true,
               email: true

           }
       },
       messages: {

           email: {
               required: "This field is required",
               email: "Please enter a valid email address"
           }
       }
   
   });
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
            toastr.info('Message Send!!');
            event.preventDefault();
        })
    }
input_email.addEventListener("submit", function(){
    toastr.info('The information was sand to your email!!');
    event.preventDefault();
});
} );
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//$('#form_info').validate({
//    rules: {
//        name: {
//            required: true,
//            minlength: 3,
//            maxlength: 20,
//        },
//
//        email: {
//            required: true,
//            email: true,
//        },
//        phone: {
//            required: true,
//            minlength: 6,
//            maxlength: 16,
//        },
//    },
//
//    messages: {
//
//        name: {
//            required: "Please Tell Me Your Name",
//            minlength: "Name must be at least 3 characters",
//            maxlength: "Name is too long",
//        },
//
//        email: {
//            required: "Please write Your e-mail address",
//            email: "Your email address is invalid"
//        },
//        comment: {
//          required: "Please write Your e-mail address",
//          minlength: "Comment must be at least 10 characters",
//          maxlength: "Comment is too long",
//        }
//    }
//  });
//$(document).ready(function(){
//   $("#form_info").validate({
//       rules:{
//           name:{
//               required: true,
//               minlength: 4,
//            },
//       },
//   });
//$(function (){
//    $("#form_info").validate({
//        submitHandler: function (form){
//            form.submit();
//        },
//            rules: {
//                name: {
//                    required: true,
//                    minlength: 2
//                }
//            },
//            messages: {
//                name: {
//                    required: "Please enter a username",
//                    minlength: "Your username must consist of at least 2 characters"
//                }
//            }
//    });
//});
