"use client";

import { Post, Project } from "@/utils/interface";
import * as React from "react";
import { Card } from "@/components/ui/card"; // Import the Card component

type Props = {
  posts: Post[];
  projects: Project[];
};

export const revalidate = 60;

const ContentSection: React.FC<Props> = ({ posts, projects }) => {
  const contentItems = [
    ...posts.map((post) => ({ ...post, type: "post" })),
    ...projects.map((project) => ({ ...project, type: "project" })),
  ];

  return (
    <section>
      <div className="flex flex-wrap gap-6 w-full">
        {contentItems.map((item, index) => {
          return (
            <Card
              key={item._id || index}
              props={item}
              className=""
              layout="horizontal" // Set layout based on index or condition
            />
          );
        })}
      </div>
    </section>
  );
};

export default ContentSection;
