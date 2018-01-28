function area(w, h, W, H) {
    let [s1, s2, sMin] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - sMin);
}

area(2, 4, 5, 3);