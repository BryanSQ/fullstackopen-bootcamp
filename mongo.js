const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://BrySQ:tJTdZqhsQ0BFWzr5@bsqmongo.fnqn2xf.mongodb.net/testNoteApp?retryWrites=true&w=majority'

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]


mongoose.set('strictQuery',false)
mongoose.connect(MONGODB_URI)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Test note Number 1',
  date: new Date(),
  important: true,
})

const note2 = new Note({
  content: 'Test note Number 2',
  date: new Date(),
  important: true,
})


note.save().then(result => {
  console.log('note saved!')
})

note2.save().then(result => {
  console.log('note saved!')
})


Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})