import jwt from "jsonwebtoken";

const userAuth = async(req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        console.log(req.cookies)
        return res.json({success: false, message: 'Not Authorized, Please login again'})
    }

    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            //to send a empty body object if not present
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id;
            next();
        } else {
            return res.json({success: false, message: 'Unauthorized User!, Please login'})
        }
        
    }catch(error){
        return res.json({success: false, message: error.message});
    }
}

export default userAuth;