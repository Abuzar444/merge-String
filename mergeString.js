const mergeAlternatly = (s1, s2) => {
    let l1 = s1.length;
    let l2 = s2.length;
    let string = '';
    for (let i = 0; i < l1 || i < l2; i++) {
        if (i < l1) string += s1[i];
        if (i < l2) string += s2[i];
    }
    return string;
}
console.log(mergeAlternatly('Hello', 'World'))