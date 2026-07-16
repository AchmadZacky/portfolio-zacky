import blogPosts from "../data/blogPosts";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Artikel Terbaru
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              <p className="text-gray-600 mt-3">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Baca Selengkapnya →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
