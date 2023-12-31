const {Schema, model, Types} =require('mongoose');
const dateFormat =require('../utils/dateFormat');


const reactionSchema= newSchema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default:()=> new Types.ObjectId()
        },
        reactionBody:{
            type: String,
            required:true,
            maxlength:280
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
    },
    {
        toJSON:{
            virtuals:true,
            getters:true
        },
        id:false
    }
)

module.exports=reactionSchema;