import Jwt from "jsonwebtoken";
import connectToDB from "./db";
import InvalidToken from "@/models/InvalidToken";

export function createToken(user) {
    const payload = {
        username: user.username,
        _id: user._id,
    }

    return Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
}

export async function checkForInvalidToken(token) {
    await connectToDB();
    const tokensFromBase = await InvalidToken.find({});

    for (const tokenInBase of tokensFromBase) {
        if(tokenInBase.token == token) {
            return true;
        }
    }

    return false;
}

export function verifyToken(token) {
    try {
        const verifiedToken = Jwt.verify(token, process.env.JWT_SECRET);
        return verifiedToken; // {username: '...', _id: '...'}
    } catch (err) {
        throw err;
    }
}