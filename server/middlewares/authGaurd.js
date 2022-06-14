const jwt = require('jsonwebtoken')

const authenticateClientToken = async (req, res, next)=>{
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(200).json({
            result: 0,
            "errors": [{
                "msg": "No token provided"
            }]
        });
    }

    jwt.verify(token, 'algonetwork', (err, decoded) => {
        if (err) {
            return res.status(200).json({
                result: 0,
                "errors": [{
                    "msg": "Invalid Token"
                }]
            });
        }

        // req.userID = decoded.user_id;
        req.userID = 'some user id';
        res.status(200).send(req.userID)
        // return next();
    });
}

module.exports = {authenticateClientToken}
