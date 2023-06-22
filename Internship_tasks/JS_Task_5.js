let x = 32243;
let rev = 0;
const INT_MIN = Math.pow(-2, 31);
const INT_MAX = Math.pow(2, 31) - 1;

while (x !== 0) {
    rev = rev * 10 + x % 10;
    x = Math.floor(x / 10);
}

if (rev < INT_MIN || rev > INT_MAX) {
    console.log(0);
} else {
    console.log(rev);
}
