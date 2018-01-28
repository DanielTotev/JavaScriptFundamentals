function numbers(n) {
    let res = '<ul>\n';
    for (let i = 1; i <= n; i++){
        let color = i % 2 === 0 ? "blue" : "green";
        res += `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    res += '</ul>\n';
    return res;
}

console.log(numbers(5));