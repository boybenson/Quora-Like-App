import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  // fetch token from headers
  const token = req.headers.authorization;

  // check if token exist and is verified
  if (token) {
    jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET,
      (error, decoded) => {
        // If there is an error
        if (error) {
          const err = new Error(error.message);
          err.status = 401;
          next(err);
          return;
        }

        //If No Error in jwt
        else {
          req.author = decoded.data;
          next();
        }
      }
    );
  }

  // If Token Not Found!
  else {
    const err = new Error("Sorry Token Not Found, Kindly Logout");
    err.status = 401;
    next(err);
    return;
  }
};

export default requireAuth;
