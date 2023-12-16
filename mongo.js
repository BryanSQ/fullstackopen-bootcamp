const mongoose = require('mongoose')

if (process.argv.length < 3){
  console.log('give password argument');
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://BrySQ:${password}@bsqmongo.fnqn2xf.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({  
  content: "GET and POST are the most important methods of HTTP protocol",  
  important: false,
})

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})