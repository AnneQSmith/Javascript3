$(document).ready(function(){
    $("form#todo_list_form").serialize();


        var getListsFromServer = function() {
            $.ajax({
                url:'todo_lists/poll',
                method: "GET"
            }).done(function(data){
                //somehow using dom manipulation or jquery, 
              //  console.log(data);
                // $("#todo-list").html(data)
                document.getElementById('todo-list').innerHTML = data;
            });
        };

        // setInterval(getListsFromServer, 10000);

        var formSubmitButton = $("#form_submit");

        formSubmitButton.on("click", function(event){
        event.preventDefault(); // prevent the browser form submission from happening
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
           // alert(data);
        }).fail(function(){
            alert('fail!!!');
        });
    });


});