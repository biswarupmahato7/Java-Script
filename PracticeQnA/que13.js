//IP - arr = ["apple",'kiwi','abc', 'xyz','pqr'] len =3
//OP - ['abc', ''xyz', 'pqr']

function matchLen(arr){
  return arr.filter(el => el.length === 3)
}
arr = ["apple",'kiwi','abc', 'xyz','pqr']
console.log(matchLen(arr))
