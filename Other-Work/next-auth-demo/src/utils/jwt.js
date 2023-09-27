import Jwt from "jsonwebtoken";

export function createToken(user) {
    const payload = {
        username: user.username,
        _id: user._id,
    }

    return Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
}

export function verifyToken(token) {
    try {
        const verifiedToken = Jwt.verify(token, process.env.JWT_SECRET);
        return verifiedToken; // {username: '...', _id: '...'}
    } catch (err) {
        throw err;
    }
}