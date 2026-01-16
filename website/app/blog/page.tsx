import Link from 'next/link';

export const metadata = {
  title: "Blog | Melksham Mental Health",
  description: "Mental health tips, stories, resources, and updates from Melksham Mental Health.",
};

export default function BlogPage() {
  // Sample blog posts - in production, these would come from a CMS or database
  const posts = [
    {
      slug: "5-ways-support-mental-health-winter",
      title: "5 Ways to Support Your Mental Health This Winter",
      excerpt: "Winter can be challenging for mental health. Here are evidence-based strategies to help you thrive during the darker months.",
      date: "December 15, 2024",
      category: "Mental Health Tips",
      readTime: "5 min read"
    },
    {
      slug: "understanding-anxiety",
      title: "Understanding Anxiety: What You Need to Know",
      excerpt: "Anxiety affects millions. Learn about symptoms, causes, and effective coping strategies.",
      date: "December 10, 2024",
      category: "Education",
      readTime: "8 min read"
    },
    {
      slug: "local-resources-melksham",
      title: "Mental Health Resources in Melksham",
      excerpt: "A comprehensive guide to local mental health support services available in Melksham and Wiltshire.",
      date: "December 5, 2024",
      category: "Local News",
      readTime: "6 min read"
    },
    {
      slug: "app-update-december-2024",
      title: "Post Creator App: December 2024 Update",
      excerpt: "New features, improvements, and what's coming next for the Post Creator desktop app.",
      date: "December 1, 2024",
      category: "App Updates",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Mental Health Tips", "Personal Stories", "Local News", "App Updates", "Resources"];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted">
            Mental health tips, stories, and updates
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                category === "All"
                  ? "bg-primary text-white"
                  : "bg-darker text-white hover:bg-dark border border-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-darker rounded-lg border border-primary/20 overflow-hidden hover:border-primary transition-colors"
            >
              <div className="h-48 bg-dark flex items-center justify-center">
                <div className="text-6xl">📝</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-muted text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary hover:text-primary font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination (placeholder) */}
        <div className="flex justify-center gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded font-semibold">
            1
          </button>
          <button className="bg-darker text-white px-4 py-2 rounded hover:bg-dark">
            2
          </button>
          <button className="bg-darker text-white px-4 py-2 rounded hover:bg-dark">
            3
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white mb-6">
            Get mental health tips and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-grow px-4 py-3 rounded-lg text-dark"
            />
            <button className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
