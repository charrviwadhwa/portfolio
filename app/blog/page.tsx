"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  thumbnailUrl: string;
  title: string;
  excerpt?: string;
  href?: string;
  tags?: readonly string[];
  publishDate: string;
  readTime?: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  content?: string;
}

export const BlogCard = ({
  thumbnailUrl,
  title,
  excerpt,
  href,
  tags,
  publishDate,
  readTime,
  author,
  content,
}: BlogCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (content) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex hover:shadow-lg transition-shadow duration-300">
        <div className="flex-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-muted m-4">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-grow ml-2 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base">
                {title}
                {tags && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {tags.map((tag, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
            </div>
            
            {excerpt && (
              <div className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">
                {excerpt}
              </div>
            )}
            
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                {formatDate(publishDate)}
              </div>
              {readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {readTime}
                </div>
              )}
              
            </div>
          </CardHeader>
          
          {content && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm px-6 pb-4"
            >
              {content}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};

// Sample blog data
const BLOG_DATA = [
  {
    thumbnailUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    title: "Getting Started with React and Next.js",
    excerpt: "Learn the fundamentals of building modern web applications with React and Next.js framework.",
    href: "/blog/react-nextjs-guide",
    tags: ["React", "Next.js", "JavaScript"],
    publishDate: "2024-03-15",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    content: "React and Next.js have revolutionized the way we build modern web applications. In this comprehensive guide, we'll explore the key concepts, best practices, and advanced techniques that will help you master these powerful technologies. From component architecture to server-side rendering, we'll cover everything you need to know to build scalable, performant applications."
  },
  {
    thumbnailUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    title: "Modern CSS Techniques and Best Practices",
    excerpt: "Explore advanced CSS features including Grid, Flexbox, and custom properties for modern web design.",
    href: "/blog/modern-css-techniques",
    tags: ["CSS", "Web Design", "Frontend"],
    publishDate: "2024-03-10",
    readTime: "7 min read",
    author: {
      name: "Jane Smith",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face"
    },
    content: "CSS has evolved significantly over the years, introducing powerful features that make styling more efficient and maintainable. We'll dive deep into CSS Grid for complex layouts, Flexbox for component alignment, custom properties for dynamic theming, and modern pseudo-selectors that can replace JavaScript functionality."
  },
  {
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Design and implement robust backend services using Node.js, Express, and modern architectural patterns.",
    href: "/blog/scalable-nodejs-apis",
    tags: ["Node.js", "API", "Backend"],
    publishDate: "2024-03-05",
    readTime: "10 min read",
    author: {
      name: "Mike Johnson",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    content: "Building scalable APIs requires careful consideration of architecture, performance, and maintainability. This guide covers RESTful design principles, authentication strategies, error handling, rate limiting, database optimization, and deployment best practices for Node.js applications."
  },
  {
    thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    title: "TypeScript for JavaScript Developers",
    excerpt: "Transition from JavaScript to TypeScript and leverage static typing for better code quality.",
    href: "/blog/typescript-for-js-developers",
    tags: ["TypeScript", "JavaScript", "Programming"],
    publishDate: "2024-02-28",
    readTime: "8 min read",
    author: {
      name: "Sarah Wilson",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    content: "TypeScript adds static type checking to JavaScript, helping catch errors early and improving code maintainability. We'll explore type annotations, interfaces, generics, advanced types, and how to gradually migrate existing JavaScript projects to TypeScript while maintaining productivity."
  },
  {
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "Web Performance Optimization Strategies",
    excerpt: "Learn techniques to improve website speed, user experience, and Core Web Vitals scores.",
    href: "/blog/web-performance-optimization",
    tags: ["Performance", "Optimization", "UX"],
    publishDate: "2024-02-20",
    readTime: "12 min read",
    author: {
      name: "Alex Chen",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
    },
    content: "Web performance directly impacts user experience and SEO rankings. This comprehensive guide covers image optimization, code splitting, lazy loading, caching strategies, CDN implementation, and measuring Core Web Vitals. Learn how to audit your site and implement improvements that make a real difference."
  }
];

// Main Blog Page Component
export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
      </div>
      
      <div className="space-y-4">
        {BLOG_DATA.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}