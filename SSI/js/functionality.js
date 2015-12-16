/**
 * Created by Adiba on 12/9/15.
 */
//Adds event listener for signifier click

"use strict";

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById( "signifier" ).addEventListener("click", openNav)
});

var captions = ["Jiu-Jitsu and striking area", "Wrestling mats and heavy bags", "Sparring area", "Cardio area"];

$(document).ready( function(){
    $("#aboutSlides").slidesjs( {
        width: 600,
        height: 400,
        pagination:
        {
            active: false
        },
        effect:
        {
            slide:
            {
                speed: 1000
            }
        },
        callback:
        {
            complete: updateCaption
        }
    });

});






function updateCaption(number){

    var caption = $(captions)[number - 1];
    $("#description").hide().text(caption).fadeIn();
}


//Mobile nav is closed by default
var navState = "closed";

//Opens or closes nav absed on navState's current value
function openNav(){

    var nav = document.getElementById( "mobilNav" );

    if(navState === "closed"){
        nav.style.top = "60px";
        navState = "open";
    }
    else{
        nav.style.top = "-300px";
        navState = "closed";
    }
}

//Gets the users values from the form and checks if they are valid
function validate(){
    var errMsgArr = [];//Array list that error messages will be added to
    var emailPttrn = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;//pattern to check email against
    var theErrMsg = document.getElementById( "formError" );
    var genderCheck = false;
    while(theErrMsg.firstChild){
        theErrMsg.removeChild(theErrMsg.firstChild);
    }

    if(document.getElementById( "fName" ).value.length<1){ //First name check
        errMsgArr[0] = "Please enter your first name";
    }

    if(document.getElementById( "lName" ).value.length<1){ //Last name check
        errMsgArr[1] = "Please enter your last name";
    }

    if(document.getElementById( "pNum" ).value.length<10){ //Phone number check
        errMsgArr[2] = "Please enter a 10 digit phone number";
    }

    if(!emailPttrn.test(document.getElementById( "email" ).value)){ //Email check using pattern
        errMsgArr[3] = "Please enter a valid email";

        var gender = document.getElementsByName( "gender" ); //checks that gender boxes are selected
        for(var x in gender){
            if(gender.hasOwnProperty(x)){//Iterates through both gender buttons and if one of them is checked
                if( gender[x].checked ){
                    genderCheck = true;
                }
            }
        }

        if( !genderCheck ){
            errMsgArr[4] = "Please select a gender";
        }
    }
    //If there was an error, the array list items are appended to a previously empty div. The items are appended one by one followed by a break tag so that there is appropriate spacing between them
    if(errMsgArr.length>0){
        for(var z in errMsgArr){
            var tempMsg = errMsgArr[z];
            var tNode = document.createTextNode(tempMsg);
            document.getElementById( "formError").appendChild(tNode);
            var br = document.createElement( "br" );
            document.getElementById( "formError").appendChild(br);
        }
        return false;
    }
    else{ //If there was no error with the form, submit it
        return true;
    }
}



