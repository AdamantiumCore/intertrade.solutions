import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = (req, res) => {
    console.log(req.userId);
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Not Authenticated!"})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err){
            return res.status(401).json({message: "Token is not Valid!"})
        }
    })

    res.status(200).json({message: "You are Authenticated!"})
}
export const shouldBeAdmin = (req, res) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Not Authenticated!"})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err){
            return res.status(401).json({message: "Token is not Valid!"})
        }
        if(!payload.isAdmin){
            return res.status(403).json({message: "Not authorized!"});
        }
    })

    res.status(200).json({message: "You are Authenticated!"})
}