$(document).ready(function(){
    

    $("#formValidate").validate({
        rules: {
            firstName: {
              required: true  
            },
            lastName: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            emailText: {
                required: true,
                minlength: 10
            }
        },
        errorElement: "div",
        errorPlacement: function(error, element){
            var placement = $(element).data("error");
            if(placement){
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#contactButton").click(function(){
        $("#formValidate").attr("action", "mailto:jaycen9887#gmail.com?subject='Website Connections with '" + $("#first_name").val() + " " + $("#last_name").val() + "&body=" + $("#emailText").val());
        $("#formValidate").submit();
    });

});


