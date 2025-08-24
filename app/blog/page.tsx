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
        thumbnailUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*w9OGCqQLPC99X-W3.png?w=400&h=300&fit=crop",
    title: "My First Open Source Journey: Diving into GSSoC Extended and Hacktoberfest 2024",
    excerpt: "Sharing my experiences, challenges, and lessons learned while contributing to open source for the first time.",
    href: "https://medium.com/@charviwadhwa06/my-first-open-source-journey-diving-into-gssoc-extended-and-hacktoberfest-2024-7c854b87283c",
    tags: ["Open Source", "Hacktoberfest", "GSSoC"],
    publishDate: "2025-05-18",
    readTime: "3 min read",
  },
  {
        thumbnailUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qRqF4VATl5vYz_MEnXZSQQ.png?w=400&h=300&fit=crop",
    title: "From Zero to First PR: How to Begin Your Open Source Journey",
    excerpt: "A practical guide to getting started, growing, and thriving in the world of open source",
    href: "https://medium.com/@charviwadhwa06/from-zero-to-first-pr-how-to-begin-your-open-source-journey-972a4ae53444",
    tags: ["Open Source", "GitHub"],
    publishDate: "2025-08-21",
    readTime: "4 min read",
  },
  
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