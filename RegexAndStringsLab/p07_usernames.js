function extractUserNames(arr) {
    let usernames = [];
    for(let element of arr){
        let tokens = element.split('@');
        let userName =  tokens[0] + '.';
        tokens[1].split('.').forEach(x => userName += x[0]);
        usernames.push(userName);
    }
    console.log(usernames.join(', '));
}

extractUserNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);