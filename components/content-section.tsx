"use client";

import { Post, Project } from "@/utils/interface";
import * as React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Ensure this is the correct import path

type Props = {
  posts: Post[];
  projects: Project[];
};

export const revalidate = 60;

const ContentSection: React.FC<Props> = ({ posts, projects }) => {
  // Combine posts and projects into a single array with identifiers
  const contentItems = [
    ...posts.map((post) => ({ ...post, type: "post" })),
    ...projects.map((project) => ({ ...project, type: "project" })),
  ];

  return (
    <section>
      <div className="animate-in">
        {/* Unified grid for both posts and projects */}
        <BentoGrid className="max-w-4xl mx-auto grid auto-rows grid-cols-3 gap-4">
          {contentItems.map((item, index) => (
            <BentoGridItem
              key={item._id || index}
              props={item}
              // Adjust className to control grid item spanning based on index
              className={index === 3 || index === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ContentSection;
