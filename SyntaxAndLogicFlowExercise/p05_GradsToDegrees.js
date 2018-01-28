function gradsToDegrees(grads) {
    grads = grads % 400;
    if (grads < 0) {
        grads += 400;
    }

    let degrees = grads *  0.9;
    return degrees;
}

console.log(gradsToDegrees(-50));
