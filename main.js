var fetch = function(){
    $.ajax({
        method: "GET",
        url: "http://localhost:8000",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (){
            console.log('error!');
        }
    })
};

fetch();