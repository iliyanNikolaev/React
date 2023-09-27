import Jwt from "jsonwebtoken";

export function createToken(user) {
    const payload = {
        username: user.username,
        _id: user._id,
    }

    return Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
}