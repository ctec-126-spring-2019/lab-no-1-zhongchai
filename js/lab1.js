// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    // missing closing square bracket
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    // <h2> tag wasn't closed properly
    let output = "<h2>Bruce's Skills</h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    // missing '=' sign and semicolon (2 errors)
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    // missing semicolon (this should still work but should be added for consistency's sake)
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // the dollar sign before the lastName, city, and gpa variables are missing (3 errors)
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;

    // the quotation marks around the </p> do not match (one side is single and the other is double)
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}