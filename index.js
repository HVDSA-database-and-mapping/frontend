let home = false;
let response = 0;
let follow_up = false;
let unit = 0;
let comment = "";
let address = "<unselected>";

let canvas = ""

// parses URL for query string
function gup(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results == null)
    return "";
  else return unescape(results[1]);
}

// TODO: set up given organizer-provided address values
function initMap() {
 
        var a2 = {lat: 42.276797, lng: -83.741132};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: a2
        });
        var marker = new google.maps.Marker({
          position: a2,
          map: map
        });
}

// unselects all response choices
function clearRC() {
    $('.rc').each( function() {
        $(this).css( "opacity", "0.3");
    });
}

// unselects all home/not home choices
function clearHC() {
    $('.hc').each( function() {
        $(this).css( "opacity", "0.3");
    });
}

// sets all variables to original values and unselects all choices
function clearAll() {
    clearRC();
    clearHC();
    $("#comment_box").val('');

    home = false;
    response = 0;
    follow_up = false;
    comment = "";
    address = "<unselected>";
    unit = 0;
}

$(document).ready( function(){

    canvas = gup('canvas');

    $("#canvas_type").text(canvas);
    $("#display_address").text(address);

    // clicking a home/not home choice
    $('.hc').click( function () {

        clearHC();

        let value = $(this).context.attributes.value.value;

        $(this).css( "opacity", "1");

        if (value == "home") {
            $('#response').show("fast");
            home = true;
        } else {
            $('#response').hide();
            home = false;
        }
    });

    // clicking a response choice
    $('.rc').click( function() {

        clearRC();

        $(this).css( "opacity", "1");
        let value = $(this).context.attributes.value.value;
        response = value;

        console.log(value);

    });

    // clicking the submit button
    $("#submit_answer").click( function() {

        comment = document.getElementById("comment_box").value;

        let data = {
            canvas: canvas,
            answer: home,
            address: address,
            receptive: response,
            comment: comment
        };

         $.ajax({
             data: data,
             type:"POST",
             url: "./log_response.php",
             dataType: 'json',
            success: function(data){
                console.log("log posted");
                clearAll();
            },
            error: function(xhr) {
                if (xhr.statusText == "OK") {
                    console.log("log posted");
                    clearAll();
                    return;
                }
                console.log("Error: " + xhr.statusText);
           }
         });
    });
});




