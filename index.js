
const { default: mongoose } = require('mongoose')
const userSchema = require('./schema/user-schema');
const app = require('./app');
const connectToMongoDB = async () => {
    await app().then(async (mongoose) =>   {
        try {
            console.log("connsected to mongodb");
            const user = {
                
                name: 'deniz',
                username: 'dnz'
            }
            await new userSchema(user).save();
            const result = await userSchema.find({

            })
            await userSchema.update(
            {
                name:'deniz'
            },
            {
                name:'samet'
            })

            await userSchema.deleteOne({
                
                    name:'',
            
            })

        }
        finally {
            mongoose.connection.close()
        }
    });
}

connectToMongoDB();