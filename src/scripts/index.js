

$(document).ready(function(){
    $("#countryInput").keyup(function(e){
        var url = "http://localhost:48042/getCountries";
        var country = $(this).val()
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            data: {
              "search": country
            },
            success: function(data)
            {
                provideAutocomplete($("#countryInput"), data);
            },
            error: function(xhr, status, error)
            {
                alert(xhr.responseText);
            }
        });
        e.preventDefault();
    });
});

function provideAutocomplete(input, data) {
    let a, b;
    let val = $("#countryInput").val();
    closeAllLists();
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    $("#countryInput").parent().append(a);
    for (i = 0; i < data.length; i++) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + data[i].substr(0, val.length) + "</strong>";
            b.innerHTML += data[i].substr(val.length);
            b.addEventListener("click", function(e) {
                closeAllLists();
            });
            a.appendChild(b);
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}