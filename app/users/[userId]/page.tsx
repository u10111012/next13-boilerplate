import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import {Suspense} from "react";
import UserPosts from "@/app/users/[userId]/components/UserPosts";
import type {Metadata} from "next";

type Params = {
    params:{
        userId:string
    }
}

async function UserPage({params:{userId}}:Params) {
    const userData : Promise<IUser> = getUser(userId)
    const userPostsData: Promise<IPost[]> = getUserPosts(userId)

    // If not progressively rendering with Suspense, use Promise.all
    //const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    return (
        <>
             <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    );
}

export default UserPage;