const jwt = require('jsonwebtoken');

function isAuthorised(req, res, next){
    let token = null
    if(req.headers['authorization']){
        token = req.headers['authorization'].split(" ")[1]
    };
    
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if(err) res.status(403).json(err);

        console.log(decoded)
        if(decoded){
            res.set({
                "token-expires-at" : decoded.exp
            })
            next();
        }
    });
}

module.exports = isAuthorised;
