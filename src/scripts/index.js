$(document).ready(function(){
    $("#searchForm").submit(function(e){
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            data: form.serialize(),
            success: function(data)
            {
                console.log(data);
                alert(data);
            },
            error: function(xhr, status, error)
            {
                alert(xhr.responseText);
            }
        });
        e.preventDefault();
    });
});
