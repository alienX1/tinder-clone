import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})

export default mongoose.model('cards', cardSchema);