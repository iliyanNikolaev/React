import { Schema, model, models } from 'mongoose';

const topicSchema = new Schema({
    title: { type: String, required: true, max: 20, min: 3},
    text: { type: String, required: true, max: 500, min: 10},
});

const Topic = models.Topic || model('Topic', topicSchema);

export default Topic;