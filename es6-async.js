// using async functions and await keywords
function reachOut(val) {
  console.log('reach out called with:', val)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val);
    }, 10)
  })
}

async function adderSequence(x) {
  let a = reachOut(30);
  let b = reachOut(20);

  return x + await a + await b;
}

adderSequence(10).then(val => {
  console.log(val);
});