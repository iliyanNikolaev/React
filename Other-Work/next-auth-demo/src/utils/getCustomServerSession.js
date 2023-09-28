import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'

const getCustomServerSession = async () => {
    const session = await getServerSession(authOptions);

    if(session){
        return {
            username: session.user.name.username,
            _id: session.user.name._id,
        }
    }

    return null;
}

export default getCustomServerSession;