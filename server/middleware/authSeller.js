import jwt from 'jsonwebtoken'

export const authSeller = async(req, res, next) => {
    const {sellerToken} = req.cookies;

    if(!sellerToken){
        return res.json({success: false, message:"Not Authorized"});
    }

    try{
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET)
        if(tokenDecode.email === process.env.SELLER_EMAIL){
            next();
        }
        else{
            return res.json({success: false, message:'Not Authorized'});
        }
    }
    catch(error){
        res.json({success: false, message: error.message})
    }
}


// Logout Seller : /api/user/logout
export const sellerLogout = async(req, res)=>{
    try{
        res.clearCookie('sellerToken',{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        })

        return res.json({success:true, message:"Logged Out"})
    }
    catch(error){
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}