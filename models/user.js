User.init(
    {
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            required: true,
            trimmed: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id:{
            type: DataTypes.ARRAY,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        }

    }
);

module.exports=User;