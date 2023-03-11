
interface IUserPostsProps {
    promise:Promise<IPost[]>
}
async function UserPosts({promise}:IUserPostsProps) {

    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        )
    })
    return content
}

export default UserPosts;