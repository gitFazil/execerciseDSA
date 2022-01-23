function countFriendsPairings(n) {
  let a = 1,
    b = 2,
    c = 0;
  if (n <= 2) {
    return n;
  }
  for (let i = 3; i <= n; i++) {
    c = b + (i - 1) * a;
    a = b;
    b = c;
  }
  return c;
}
let n = 5;
console.log(countFriendsPairings(n));
