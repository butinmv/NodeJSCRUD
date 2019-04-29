$(document).ready(function(){
    $("form#addStaff").on('submit', function(e){
        console.log("AJAX")
        e.preventDefault();
        var name = $('input[name=name]').val();
        var sirname = $('input[name=sirname]').val();
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();

        $.ajax({
            type: 'post',
            url: '/',
            data: {
                name: name,
                sirname: sirname,
                email: email,
                password: password
            },
            dataType: 'text'
        })
            .done(function(data){
                $('#tableajax').html(data);
            });
    });
});