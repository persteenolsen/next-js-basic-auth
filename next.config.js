module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api

            // Note: For simulate a prod enviroment while testing locally
            // : 'http://localhost:3000/api' // development api
            : 'https://psonextjsone.netlify.app/api' // production api
    }
}
