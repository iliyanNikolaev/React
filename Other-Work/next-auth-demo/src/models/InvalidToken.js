import { Schema, model, models } from 'mongoose';

const invalidTokenSchema = new Schema({
    token: String,
    createdAt: Object
});

invalidTokenSchema.index( { "createdAt": 1 }, { expireAfterSeconds: 43200 } ); // 43200 seconds = 12 hours

const InvalidToken = models.InvalidToken || model('InvalidToken', invalidTokenSchema);

export default InvalidToken;