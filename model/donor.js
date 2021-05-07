const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
    namaKegiatan: {
        type : String
    },

    namaRelawan: {
        type : String
    },

    golonganDarah: {
        type : String
    },

    nomorTelpone: {
        type : Number
    }
})

module.exports = mongoose.model('donor', donorSchema)