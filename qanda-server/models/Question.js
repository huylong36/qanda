const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema(
    {
        name: {
            type: String,
        },
        content: {
            type: String,
        },
        slug: {
            type: String,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("question", QuestionSchema);
