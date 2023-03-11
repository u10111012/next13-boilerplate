import Link from "next/link";
import getAllUser from "@/lib/getAllUser";
import {Metadata} from "next";



async function UsersPage() {
    const userData: Promise<IUser[]> = getAllUser()
    console.log(userData)
    const users = await userData
    return (
        <section>
            <h2>
                <Link href="/">
                    Back to home
                </Link>
            </h2>
            <br/>

            {users.map(user => {
                return <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br/>
                </>

            })}

        </section>
    );
}

export default UsersPage;