/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        
        function q1Score(q1Result){
            if (q1Result === "Summer"){
                return 1;
            } else if (q1Result === "Fall"){
                return 2;
            } else if (q1Result === "Winter"){
                return 3;
            } else if (q1Result === "Spring"){
                return 4;
        }}
    
        function q2Score(q2Result){
            if (q2Result === "Breakfast"){
                return 1;
            } else if (q2Result === "Lunch"){
                return 2;
            } else if (q2Result === "Dinner"){
                return 3;
            } else if (q2Result === "Dessert"){
                return 4;
        }}
    
        function q3Score(q3Result){
            if (q3Result === "Eating"){
                return 1;
            } else if (q3Result === "Sleeping"){
                return 2;
            } else if (q3Result === "Sports"){
                return 3;
            } else if (q3Result === "Games"){
                return 4;
        }}
    
        function q4Score(q4Result){
            if (q4Result === "1-3"){
                return 1;
            } else if (q4Result === "4-7"){
                return 2;
            } else if (q4Result === "8-12"){
                return 3;
            } else if (q4Result === "24"){
                return 4;
        }}
        
        var totalScore = q1Score(q1Result) + q2Score(q2Result) + q3Score(q3Result) + q4Score(q4Result);

        function SpiritAnimal(x){
            if (x >= 13){
                return "Bear";
            } else if (13 > x && x >= 10){
                return "Snake";
            } else if (10 > x && x >= 7){
                return "Dog";
            } else if (7 > x && x >= 4){
                return "Penguin";
            } else {
                return "Not All Questions Were Answered";
            }
        }
        
        $(".result").html("Congrats " + name + " " + SpiritAnimal(totalScore));
    });
});