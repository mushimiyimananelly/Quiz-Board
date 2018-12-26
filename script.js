// FRONT-END LOGIC

$(document).ready(function(){
    $("form#form").submit(function(event){
    var q1= $("input:radio[name=questionOneAnswer]:checked").val();
    var q2= $("input:radio[name=questionTwoAnswer]:checked").val();
    var q3= $("input:radio[name=questionThreeAnswer]:checked").val();
    var result=parseInt(q1)+parseInt(q2)+parseInt(q3);
    $("#result").text("YOU SCORED IS: " +result + "/60");

    $("button").click(function() {
        $("#result").toggle();
        $("#form").toggle();
    });
    $("form#form").hide();
    $("#result").show();
    event.preventDefault();
    });
});

// BUSINESS LOGIC

function add(q1,q2,q3) {
    var score = q1 + q2 + q3;

    return score;
}


