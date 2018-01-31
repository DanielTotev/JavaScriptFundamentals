function validate(potentialEmail) {
    let emailPattern = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
    console.log(emailPattern.test(potentialEmail) ? 'Valid' : 'Invalid');
}

validate('valid@email.bg');
validate('invalid@emai1.bg');