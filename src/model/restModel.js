const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/mndatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema
const insightSchema = new mongoose.Schema({
    end_year: { type: String, required: false},
    intensity: { type: Number, required: true},
    sector: { type: String, required: true},
    topic: { type: String, required: true},
    insight: { type: String, required: true},
    url: { type: String, required: true},
    region: { type: String, required: true},
    start_year: { type: String, required: false},
    impact: { type: String, required: false},
    added: { type: String, required: true},
    published: { type: String, required: true},
    country: { type: String, required: true},
    relevance: { type: Number, required: true},
    pestle: { type: String, required: true},
    source: { type: String, required: true},
    title: { type: String, required: true},
    likelihood: { type: Number, required: true}
});

// Create the model
const Insight = mongoose.model('Insight', insightSchema);

// Export the model
module.exports = Insight;
