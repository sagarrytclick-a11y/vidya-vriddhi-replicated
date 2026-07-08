import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

interface BlogCardProps {
  title: string;
  slug: string;
  category: string;
  content: string;
  tags?: string[];
  createdAt: string;
  image?: string;
}

// Compact Small Card Variant
const CompactBlogCard = ({ title, slug, category, content, tags, createdAt, image }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/blogs/${slug}`} className="group block">
      <div className="flex gap-4 p-4 bg-white rounded-2xl border-2 border-[#E2E8F0] shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(239,125,49,0.15)] hover:border-[#EF7D31] transition-all duration-500 hover:-translate-y-1">
        
        {/* Image */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={image || "/next.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#EF7D31]/20 group-hover:bg-[#EF7D31]/30 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="space-y-2">
            {/* Category */}
            <span className="inline-block bg-[#EF7D31]/10 text-[#EF7D31] px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
              {category}
            </span>
            
            {/* Title */}
            <h3 className="text-lg font-black text-[#1E212B] leading-tight group-hover:text-[#EF7D31] transition-colors line-clamp-2">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
              {content}
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E2E8F0]/50">
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-[#EF7D31]" />
              <span className="text-[10px] font-medium text-[#64748B]">
                {formatDate(createdAt)}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-[#EF7D31] group-hover:text-[#4A90E2] transition-colors">
              <span className="text-[10px] font-black">Read</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogCard = ({ title, slug, category, content, tags, createdAt, image }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const readTime = Math.ceil(words / wordsPerMinute);
    return `${readTime} min read`;
  };

  return (
    <Link href={`/blogs/${slug}`} className="group block">
      <div className="flex flex-col group cursor-pointer bg-[#FFFFFF] rounded-[3rem] border-2 border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(239,125,49,0.15)] hover:border-[#EF7D31] transition-all duration-500 overflow-hidden h-full relative">
        
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image || "/next.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1E212B]/70 via-transparent to-transparent opacity-90" />
          
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-[#EF7D31]/10 group-hover:bg-[#EF7D31]/20 transition-colors duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#EF7D31] text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm border-2 border-white/20">
              {category}
            </span>
          </div>

          {/* Date Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-lg border-2 border-[#EF7D31]/20">
              <Calendar size={14} className="text-[#EF7D31]" />
              <span className="text-xs font-black text-[#1E212B]">
                {formatDate(createdAt).split(' ')[1]} {formatDate(createdAt).split(' ')[2]}
              </span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 flex flex-col flex-grow relative">
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-[#EF7D31]/10 text-[#EF7D31] px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1 border border-[#EF7D31]/20">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl font-black text-[#1E212B] mb-4 leading-tight group-hover:text-[#EF7D31] transition-colors line-clamp-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 mb-8 flex-grow font-medium">
            {content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-[#64748B] text-xs font-medium">
              {/* <Clock size={14} className="text-green-500" />
              <span>{calculateReadTime(content)}</span> */}
            </div>
            
            <button className="flex items-center gap-2 text-[#EF7D31] font-black text-sm hover:text-[#4A90E2] transition-all group/btn bg-[#EF7D31]/10 px-4 py-2 rounded-full hover:bg-[#4A90E2]/10">
              Read Article
              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const fetchBlogs = async (): Promise<BlogCardProps[]> => {
  const response = await fetch('/api/blogs?page=1&limit=12', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  const result = await response.json()
  if (!result.success) {
    throw new Error(result.message || 'Failed to fetch blogs')
  }
  
  // Transform API data to match BlogCard interface
  return result.data.blogs.map((blog: any) => ({
    title: blog.title,
    slug: blog.slug,
    category: blog.category || "Blog",
    content: blog.content || "Read more about this blog post",
    tags: blog.tags || [],
    createdAt: blog.createdAt,
    image: blog.image
  }))
}

export default function LatestBlogs() {
  const { data: blogs = [], isLoading, isError, error } = useQuery({
    queryKey: ['latest-blogs'],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const [displayedBlogs, setDisplayedBlogs] = React.useState<BlogCardProps[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const blogsPerPage = 6;

  // Initialize displayed blogs when data is loaded
  React.useEffect(() => {
    if (blogs.length > 0 && displayedBlogs.length === 0) {
      const initialBlogs = blogs.slice(0, blogsPerPage);
      setDisplayedBlogs(initialBlogs);
      setHasMore(blogs.length > blogsPerPage);
    }
  }, [blogs, displayedBlogs.length, blogsPerPage]);

  const loadMoreBlogs = () => {
    if (isLoading) return; // Prevent loading more while already loading
    
    const currentLength = displayedBlogs.length;
    const nextBlogs = blogs.slice(currentLength, currentLength + blogsPerPage);
    const newDisplayedBlogs = [...displayedBlogs, ...nextBlogs];
    
    setDisplayedBlogs(newDisplayedBlogs);
    setHasMore(blogs.length > newDisplayedBlogs.length);
  };

    

  if (isError) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20 bg-[#F8FAFC]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#1E212B] mb-4 tracking-tighter">
            LATEST <span className="text-[#EF7D31]">BLOGS</span>
          </h2>
          <p className="text-[#64748B] font-medium text-lg">
            Educational insights, study tips, and success stories from our experts.
          </p>
        </div>
        <div className="text-center">
          <p className="text-red-500 text-lg">Failed to load blogs: {error?.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-[#1E212B] mb-4 tracking-tighter">
          LATEST <span className="text-[#EF7D31]">BLOGS</span>
        </h2>
        <p className="text-slate-500 font-medium text-lg">
          Educational insights, study tips, and success stories from our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.map((blog, index) => (
          <CompactBlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-16">
          <Button 
            onClick={loadMoreBlogs}
            disabled={isLoading}
            className="inline-flex justify-center items-center gap-3 bg-[#EF7D31] text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-[#4A90E2] transition-all duration-300 shadow-xl shadow-[#EF7D31]/30 hover:shadow-[#4A90E2]/30 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Load More Articles</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      )}

      {/* View All Blogs Button - Only show when no more blogs to load */}
      {!hasMore && displayedBlogs.length > 0 && (
        <div className="text-center mt-12">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-3 bg-[#1E212B] text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-[#EF7D31] transition-all duration-300 shadow-xl shadow-[#1E212B]/30 hover:shadow-[#EF7D31]/30 transform hover:scale-105 border-2 border-white/20"
          >
            View All Blogs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </section>
  );
}