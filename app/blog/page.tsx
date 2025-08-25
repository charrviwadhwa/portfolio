"use client";

import BlogCard from "@/components/BlogCard";

const BLOG_DATA = [
  {
    thumbnailUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*w9OGCqQLPC99X-W3.png?w=400&h=300&fit=crop",
    title:
      "My First Open Source Journey: Diving into GSSoC Extended and Hacktoberfest 2024",
    excerpt:
      "Sharing my experiences, challenges, and lessons learned while contributing to open source for the first time.",
    href: "https://medium.com/@charviwadhwa06/my-first-open-source-journey-diving-into-gssoc-extended-and-hacktoberfest-2024-7c854b87283c",
    tags: ["Open Source", "Hacktoberfest", "GSSoC"],
    publishDate: "2025-05-18",
    readTime: "3 min read",
  },
  {
    thumbnailUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qRqF4VATl5vYz_MEnXZSQQ.png?w=400&h=300&fit=crop",
    title: "From Zero to First PR: How to Begin Your Open Source Journey",
    excerpt:
      "A practical guide to getting started, growing, and thriving in the world of open source",
    href: "https://medium.com/@charviwadhwa06/from-zero-to-first-pr-how-to-begin-your-open-source-journey-972a4ae53444",
    tags: ["Open Source", "GitHub"],
    publishDate: "2025-08-21",
    readTime: "4 min read",
  },
];

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
