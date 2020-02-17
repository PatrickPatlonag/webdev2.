function all(promise1, promise2) {
  var result = []
  return new Promise(function(resolve, reject) {
    return promise1.then(function(response) {
  
      result.push(response)
      return promise2.then(function(response) {

        result.push(response)
        resolve(result)
      })
    })
  })

}


all(getPromise1(), getPromise2())
.then(function(response) {
  console.log(response)
})
