const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    titles_score: Number,
    item_name: String,
    skills_common: [String],
    query_name: String,
    query_id: String,
    item_id: [String],
    location_distance: Number,
    item_place: String,
    query_place: String,
    query_title: String,
    item_title: String,
    tfidf_score: Number,
    lda_score: Number,
    doc2vec_score: Number,
    important_features_tfidf: [[String]],
    visited: Boolean
})

module.exports = mongoose.model('Match', matchSchema)