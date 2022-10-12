// import Cors from "cors"
// import initMiddleware from "@utils/initMiddleware"

// const whitelist = [process.env.NEXT_PUBLIC_APP_URL]

// const corsMiddleware = initMiddleware(
//   Cors({
//     origin: function (origin, callback) {
//       if (!origin || whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error("Not allowed by CORS"))
//       }
//     },
//   })
// )
// export default corsMiddleware
export default {}
