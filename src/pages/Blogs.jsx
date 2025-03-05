import { useState } from "react";
import img1 from "../assets/blogHero.png";
import img2 from "../assets/blog2.jpeg";
import img3 from "../assets/blog3.png";
import img4 from "../assets/blog4.webp";
import img5 from "../assets/blog5.png";
import img6 from "../assets/blog6.png";
import { Link } from "react-router-dom";
// Sample blog data - in a real app, you would fetch this from an API or CMS
const BLOG_POSTS = [
  {
    title: "10 Web Design Trends to Watch in 2025",
    excerpt:
      "Discover the cutting-edge design trends that will dominate the web landscape in 2025 and beyond. From immersive 3D experiences to sustainable design practices.",
    date: "March 1, 2025",
    category: "Design",
    image: img1,
    slug: "web-design-trends-2025",
    featured: true,
  },
  {
    title: "How to Improve Your Website's SEO",
    excerpt:
      "Learn the essential techniques to boost your website's search engine ranking and drive more organic traffic.",
    date: "February 25, 2025",
    category: "SEO",
    image: img2,
    slug: "how-to-improve-seo",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt:
      "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
    date: "February 20, 2025",
    category: "Development",
    image: img3,
    slug: "building-accessible-web-applications",
  },
  {
    title: "The Future of Frontend Development",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the future of frontend development.",
    date: "February 15, 2025",
    category: "Development",
    image: img4,
    slug: "future-of-frontend-development",
  },
  {
    title: "Mastering User Experience Design",
    excerpt:
      "Dive deep into the principles and practices of user experience design to create intuitive and engaging digital products.",
    date: "February 10, 2025",
    category: "UX",
    image: img5,
    slug: "mastering-user-experience-design",
  },
  {
    title: "Optimizing Website Performance",
    excerpt:
      "Practical strategies to improve your website's loading speed and overall performance for better user experience and SEO.",
    date: "February 5, 2025",
    category: "Development",
    image: img6,
    slug: "optimizing-website-performance",
  },
];

const BlogLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get featured post
  const featuredPost = BLOG_POSTS.find((post) => post.featured);

  // Filter posts based on category and search term
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.category.toLowerCase() === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  // Get categories with counts
  const categories = [
    {
      name: "All",
      slug: "all",
      count: BLOG_POSTS.length,
      active: activeCategory === "all",
    },
    ...Array.from(new Set(BLOG_POSTS.map((post) => post.category))).map(
      (category) => ({
        name: category,
        slug: category.toLowerCase(),
        count: BLOG_POSTS.filter((post) => post.category === category).length,
        active: activeCategory === category.toLowerCase(),
      })
    ),
  ];

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setIsMobileMenuOpen(false);
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen ">
      {/* SEO-friendly header */}
      <header className="py-8 sm:py-12 bg-gradient-to-r mt-16 ">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My Blog
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-600">
            Insights and thoughts on web development, design, and digital
            marketing
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        {/* Featured post section */}
        {featuredPost && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-48 sm:h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-4 sm:p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-sm text-white bg-purple-500 rounded-full mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold">
                  {featuredPost.title}
                </h2>
                <p className="mt-2 text-gray-600">{featuredPost.excerpt}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-500">
                    {featuredPost.date}
                  </span>
                </div>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={toggleMobileMenu}
            className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow"
          >
            <span className="font-medium">Filters & Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <div
            className={`space-y-6 ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      category.active
                        ? "bg-purple-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategoryChange(category.slug)}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">
                Subscribe to our newsletter
              </h2>
              <p className="mt-2 text-gray-600">
                Get the latest updates and articles delivered straight to your
                inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="md:col-span-3">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative pb-[56.25%]">
                  <img src={post.image} alt={post.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <span className="inline-block px-3 py-1 text-xs text-white bg-purple-500 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold">{post.title}</h2>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                    <Link to={`/blogs/${post.slug}`} className="text-purple-500 hover:text-purple-700 text-sm font-medium transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">No posts found</h3>
              <p className="text-gray-600 mt-2">
                Try changing your search term or category filter.
              </p>
            </div>
          )}
        </div>
      </div>
        </div>
      </main>
    </div>
  );
};

export default BlogLayout;
