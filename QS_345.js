//345. Reverse Vowels of a String

function reverseStr(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr = s.split('')
    // return arr;
    let l = 0, r = s.length - 1;

    while (l < r) {
        while (l < r && !vowels.has(arr[l])) {
            l++;
        }
        while (l < r && !vowels.has(arr[r])) {
            r--;
        }
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
    return arr.join('')
}


console.log(reverseStr("IceCream"))