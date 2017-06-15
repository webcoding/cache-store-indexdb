import indexDB from 'idb-kv-store'

// 如果要使用 chunkStore
// 可以使用 'indexeddb-chunk-store'

// usage
// https://github.com/xuset/idb-kv-store
var store = new indexDB('the name of store')

// Store the value 'def' at key 'abc'
store.set('abc', 'def', function (err) {
  if (err) throw err
  store.get('abc', function (err, value) {
    if (err) throw err
    console.log('key=abc  value=' + value)
  })
})

