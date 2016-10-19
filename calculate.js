/*
Calculates the strenght of the password
 */
function calculateStrength() {
    // todo show working of userinputs
    var userInputs = [];

    var result = zxcvbn($('#password').val(), userInputs);

    $('#score').html(JSON.stringify(result));
}
