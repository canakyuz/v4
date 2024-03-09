export interface Post {
 image?: any;
 title: string
 slug: { current: string };
 publishedAt: string;
 description: string;
 body: any;
 tags: Array<Tag>;
 _id: string;
 style: string;
 author: { name: string };
}

export interface Project {
 image?: any;
 title: string
 slug: { current: string };
 publishedAt: string;
 description: string;
 body: any;
 skills: Array<Skill>;
 _id: string;
 style: string;
 author: { name: string };
}

export interface Tag {
 name: string;
 slug: { current: string };
 _id: string;
 postCount?: number
}

export interface Skill {
 name: string;
 slug: { current: string };
 _id: string;
 projectCount?: number
}