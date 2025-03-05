import { useParams } from 'react-router-dom';
import  BLOG_POSTS  from '../pages/Blogs'; // Import the blog posts data

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.date}</p>
      <p className="mt-4 text-gray-700">{post.excerpt}</p>
      <div className="mt-6">
        {/* Add more content here if needed */}
      </div>
    </div>
  );
};

export default BlogPost;