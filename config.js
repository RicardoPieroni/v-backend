
const config = {
    mongo: {
        uri: process.env.MONGOOSE_URI,
        options: {
            useMongoClient: true,
        },
    },
}

export default config;