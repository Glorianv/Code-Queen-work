// let result;
// let grade;
// if(result>=80 && result<=100){
//     grade='A'
// }else if(result>=70 && result<=79){
//     grade='B'
// }else if(result>=60 && result<=69){
//     grade='C'
// }else if(result>=50 && result<=59){
//     grade='D'
// }else if(result>=40 && result<=49){
//     grade='D'
// }else{
//     grade='Invalid result'
// }
let result;
let grade;
result=$(".result").val();
$(".submission").click(function(){
    if(result >= 80 && result <= 100 ){
            grade='A'
            $(".grading").text(`You have passed`)
        }else{ $(".grading").text("Your grade is invalid")}
    
        // else if(result >= 70 && result <= 79 ){
        //     grade='B'
        //     $(".grading").text("Your grade is " +grade)
        // }else if(result >= 60 && result <= 69 ){
        //     grade='C'
        //     $(".grading").text("Your grade is " +grade)
        // }else if(result >= 50 && result <= 59 ){
        //     grade='D'
        //     $(".grading").text("Your grade is " +grade)
        // }else if(result >= 40 && result <= 49 ){
        //     grade='E'
        //     $(".grading").text("Your grade is " +grade)
        // }else{
        //     $(".grading").text("Your grade is invalid")}
})