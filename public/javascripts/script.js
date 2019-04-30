$(document).ready(function(){

    // CREATE AJAX
    $('body').on('click', '#addStaff', function(e){
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


    // UPDATE AJAX
    $('body').on('click', '#updateStaff', function(e){
        e.preventDefault();
        var id = $('input[name=id]').val();
        var name = $('input[name=name]').val();
        var sirname = $('input[name=sirname]').val();
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();
        $.ajax({
            type: 'post',
            url: '/edit',
            data: {
                id: id,
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