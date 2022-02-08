const api =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:50000" :
    "http://localhost:5000" ;



export default api;