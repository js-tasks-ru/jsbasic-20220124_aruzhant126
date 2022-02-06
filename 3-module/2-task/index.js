
function filterRange(arr, a, b) {

  let filtered = arr.filter (function (item) {
    return a <= item && item <= b
  })
  
}

