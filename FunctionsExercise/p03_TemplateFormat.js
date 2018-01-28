function solve(arr) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i + 1];
        format(question, answer);
    }
    console.log('</quiz>');

    function format(question, answer) {
        console.log('  <question>');
        console.log('    ' + question);
        console.log('  </question>');
        console.log('  <answer>');
        console.log('    ' + answer);
        console.log('  </answer>');
    }
}

