function print(str) {
    str.split('').forEach((ch, i) => console.log(`str[${i}] -> ${ch}`));
}

print('SoftUni');