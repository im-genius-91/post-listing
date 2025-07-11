/**
 * @param {{ posts: Array<{ id: number, title: string }> }} props
 */
export default function PostsList({ posts }) {
  if (!posts?.length) return null;
  return (
    <ul className="space-y-4 mt-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-150"
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
} 