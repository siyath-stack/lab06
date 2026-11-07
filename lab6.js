
/**
 * The function below should tie the execution of your algorithms
 * to interactions with elements in your HTML.
 * Once you have completed the lab, this should 
 * allow you to run algorithms within the browser!
 */
function activateButton(){
    const button = document.getElementById('submit');
    button.addEventListener('click', function() {
        let value = document.getElementById('algorithm').value;
        let number = document.getElementById('input').value;
        output = window[value](number);
        output = "For algorithm " + value + " and input " + number + ", output is " + output;
        document.getElementById('output').innerText = output;
    } );
}

//Complete, and add JSDoc to each function below!
function problem1( number ) {
    /* write your own code here! */
}


function problem2( number ) {

    /* write your own code here! */
 

}


function problem3( number ) {

    /* write your own code here! */
  
}

function problem4( number ) {

    /* write your own code here! */

}

function problem5( number ) {

    /* write your own code here! */

}

function problem6( number ) {

    /* write your own code here! */

}

//uncomment this line to test with vitest at the command line!
//comment it to test your algorithms in the browser.
//export { problem1, problem2, problem3, problem4, problem5, problem6 }
