function printTable(n) {
    let html = '<table border="1">\n';
    //draw first line (:
    html += '  <tr><th>x</th>';
    for(let i = 1; i <= n; i++){
        html +=`<th>${i}</th>`;
    }
    html += "</tr>\n";
    //draw rest of the figure
    for(let row = 1; row <= n; row++){
        html += `  <tr><th>${row}</th>`;
        for(let col = 1; col <= n; col++ ){
            html += `<td>${col * row}</td>`;
        }
        html += `</tr>\n`;
    }
    html += '</table>\n';

    return html;
}


console.log(printTable(5));