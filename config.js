import dotenv from 'dotenv-safe';
dotenv.load();

const config = {
    mongo: {
        uri: process.env.MONGOOSE_URI,
        options: {
            useMongoClient: true,
        },
    },
}

module.exports = config;
export default module.exports;