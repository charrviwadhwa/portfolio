"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Calendar, Clock } from "lucide-react";
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
  content?: string;
}

export default function BlogCard({
  thumbnailUrl,
  title,
  excerpt,
  href,
  tags,
  publishDate,
  readTime,
  content,
}: BlogCardProps) {
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
}
