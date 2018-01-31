function fill(name, email, number, form) {
    form = form.join('\n');
    let namePattern = /<![a-zA-Z]+!>/g;
    let emailPattern = /<@[A-Za-z]+@>/g;
    let numberPattern =  /<\+[A-Za-z]+\+>/g;

    form = form.replace(namePattern, name);
    form = form.replace(emailPattern, email);
    form = form.replace(numberPattern, number);

    console.log(form);
}

fill('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);