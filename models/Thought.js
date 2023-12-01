const {Schema, model, Types} =require('mongoose');
const dateFormat =require('../utils/dateFormat');
const reactionSchema=require('./Reaction');
const reactionSchema = require('./Reaction');


const thoughtSchema= newSchema(
    {
       
       thoughtText:{
            type: String,
            required:true,
            maxlength:280,
            minlength:1,
        },
        username:{
            type:String,
            required:true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timeStamp =>dateFormat(timeStamp)
        },
        reactions:[reactionSchema]
    },
    {
        toJSON:{
            virtuals:true,
            getters:true
        },
        id:false
    }
)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought =model("Thought", thoughtSchema)

module.exports=Thought;
