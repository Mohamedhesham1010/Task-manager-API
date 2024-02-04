const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must put a name'],
        trim: true,
        maxlength: [20, 'can not contain more than 20 chars']
    }
    ,
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('task', TaskSchema)