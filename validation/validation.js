//errors.js has been replaced with validation.js
//it servers the same purpose as the original...
//...with the added function of validating the form
function validation(input){
    //clears the errors before it runs
    errors = {}
    //this variable tracks if everything checks out
    //if it makes it to the end while still being true: success!
    let valid = true;
    let regName = /[a-zA-Z]{2,}/;
    if (!regName.test(input.firstName)){
        errors.firstNameMsg = "First name must be more than 1 character and contain letters only";
        valid = false;
    }
    if (!regName.test(input.lastName)){
        errors.lastNameMsg = "Last name must be more than 1 character and contain letters only";
        valid = false;
    }
    let regAddress = /[a-zA-Z0-9]{3,}/
    if (!regAddress.test(input.address)){
        errors.addressMsg = "Address must contain more than 2 characters and consist of letters and numbers";
        valid = false;
    }
    if (!regName.test(input.city)){
        errors.cityMsg = "City must contain more than 1 character and consist of letters only";
        valid = false;
    }
    let regState = /[a-zA-Z]{2}/
    if (!regState.test(input.state)){
        errors.stateMsg = "State must be 2 characters and a valid state initial";
        valid = false;
    }
    let regZip = /[0-9-]{5,}/
    if (!regZip.test(input.zipcode)){
        errors.zipMsg = "Zip code must contain at least 5 characters";
        valid = false;
    }
    if (input.age.length < 0){
        errors.ageMsg = "Age is required";
        valid = false;
    }
    if (typeof input.gender == "undefined"){
        errors.genderMsg = "Gender must be selected";
        valid = false;
    }
    if (input.consent == null){
        errors.consentMsg = "Consent must be checked";
        valid = false;
    }
    if (input.bio.length < 1){
        errors.bioMsg = "Bio must have at least 10 characters";
        valid = false;
    }

    if(valid == true){
        errors.status = "Registration Successful!";
    }
    else{
        errors.status = "Registration Failed!";
    }
    return errors
}
module.exports = validation;