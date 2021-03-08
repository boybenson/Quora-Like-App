import jwt from "jsonwebtoken";

const generateJwtToken = async (_id) => {
  const token = await jwt.sign({ data: _id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
};

export default generateJwtToken;
