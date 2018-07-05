        window.onload = function() {
            document.getElementById('search').addEventListener('click', showResults)
        }

        function showResults() {
            //console.log('Clicked')
            //var url='https://randomuser.me/api/';
            var searchTerm = document.querySelector('input[name="searchTerm"]').value;
            var url =
             'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&search=' + searchTerm;
            var output = document.querySelector('#output');
            output.innerHTML = "<h2>Search Term is " + searchTerm + "</h2>";
            ajaxJS(url, function(response) {

                for (var x in response) {
                    // console.log(x);
                     console.log(response[x]);
                    var holder = typeof response[x] == 'string' ? response[x] : response[x][0];
                   // console.log(holder);
                    output.innerHTML += '<div class="dataOutput">' + holder + '</div>';
                }
            });
        }

        function ajaxJS(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(JSON.parse(xhr.responseText))
                }
                /*            console.log(xhr);
                            callback('ready change')*/
            }
            xhr.open('GET', url, true)
            xhr.send();
        }