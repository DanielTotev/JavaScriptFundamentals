function chess(number) {
    let html = "<div class=\"chessboard\">\n";
    for(let i = 0; i < number; i++){
        html += "  <div>\n";
        for(let j = 0; j < number; j++){
            let color = (i + j) % 2 === 0 ? "black" : "white";
            html += `   <span class="${color}"></span>\n`
        }
        html += "  </div>\n";
    }
    html += "</div>\n";
    return html;
}

