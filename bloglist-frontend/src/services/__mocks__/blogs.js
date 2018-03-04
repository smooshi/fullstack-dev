let token = null

const blogs = [
  {"_id":"5a93289c2a1c17684284afb0","title":"Tpka","author":"Pena","url":"2","likes":6,"id":2,"user":{"_id":"5a93261fa9335d67f9a021e0","username":"testi","name":"testi"},"__v":0}
  ]

const getAll = () => {
  return Promise.resolve(notes)
}

export default { getAll, blogs }
