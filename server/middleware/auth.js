import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWTSECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
