$(document).ready(function(){
     
    $('#searchTerm').keypress(function(ev){
        
        if(ev.which == 13){//Enter key pressed
            $('#search').click();//Trigger search button click event
        }
       
    });
    
    $('#search').click(function (e) {
        var searchTerm = document.querySelector('input[name="searchTerm"]').value;
        var url=
        'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&search=' + searchTerm;
        //output.innerHTML = "<h2>Search Term is " + searchTerm + "</h2>";
        
        
        details();
        $("#output").empty();

    function details(){
        var output = document.getElementById("output");
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'json',
            success: function(response){
                console.log(response);
                //for (var x in response)
                
                for(x=0;x<response[1].length;x++)
                 {
                    
                     console.log(response[1][x]);
                     console.log(response[3][x]);
                     var holder ='<h4><a href="'+response[3][x]+'" target="_blank" style="color:white">'+response[1][x]+'</h4>'+'<br>'+response[2][x];
                    //var holder = typeof response[x] == 'string' ? response[x] : response[x][0];
                   // console.log(holder);
                    output.innerHTML += '<div class="dataOutput">'+ holder + '</div>';
                 }
                 
            },
            error: function(err) {
              alert('Oops something went wrong, Please try again.');
              console.log(err);
            } 
        });
        
    }    
    }); 
});