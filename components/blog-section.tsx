"use client";

import { Post } from "@/utils/interface";
import * as React from "react";

import Section from "./section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Adjust the path as necessary

type Props = {
  posts: Post[];
};

export const revalidate = 60;

const BlogSection: React.FC<Props> = ({ posts }) => {
  return (
    <Section heading="Blog" headingAlignment="left" link="/blog">
      <div className="animate-in">
        {/* Replace Carousel with BentoGrid */}
        <BentoGrid className="w-full">
          {posts.map((post: Post, index: number) => (
            <BentoGridItem key={post._id} props={post} />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default BlogSection;
