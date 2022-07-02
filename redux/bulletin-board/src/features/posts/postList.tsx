import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

// create functional component

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const rederedPosts = posts.map(post => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {rederedPosts}
    </section>
  )
}

export default PostsList