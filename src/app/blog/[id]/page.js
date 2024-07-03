import BlogDetails from '@/components/BlogDetail';
import blogsData from '@/data/blogData';  

export async function generateStaticParams() {
  const blogIds = blogsData.map(blog => ({ id: blog.id.toString() }));
  return blogIds;
}

const BlogDetailsPage = () => {
  return (
    <BlogDetails />
  );
};

export default BlogDetailsPage;
