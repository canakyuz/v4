import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getSocials() {
  const data = await client.fetch(groq`*[_type=="social"]{
        ...
    }`);

  return data;
}

export async function getProfile() {
  const data = await client.fetch(groq`*[_type=="profile"][0]{
        ...,
        "image":image.asset->url,
        "socials":socials[]->

    }`);

  return data;
}

export async function getAbout() {
  const data = await client.fetch(groq`*[_type=="profile"][0]{
        bio,
        "secondImage":secondImage.asset->url
    }`);

  return data;
}

export async function getSkills() {
  const data = await client.fetch(groq`*[_type=="skill"]{
        _id,
        title,
        "image":image.asset->url
    }`);

  return data;
}

export async function getProject(slug: string) {
  const data = await client.fetch(
    groq`*[_type=="project" && slug.current== $slug ][0]{
        ...,
        'image': image.asset->.url,
        _id,
        title,
        slug,
        publishedAt,
        body,
        skills[]-> {
         _id,
         slug,
         name
        }
    }`,
    { slug }
  );

  return data;
}

export async function getProjects() {
  const data = await client.fetch(groq`*[_type == "project"] {
   ...,
   'image': image.asset->.url,
    _id,
   title,
   slug,
   publishedAt,
   description,
   skills[]-> {
     _id,
     slug,
     name
   }
 }`);
  return data;
}

export async function getPost(slug: string) {
  const data = await client.fetch(
    groq`*[_type=="post" && slug.current== $slug ][0]{
       ...,
       'image': image.asset->.url,
       _id,
       title,
       body,
       style,
       author->,
       tags[]-> {
        _id,
        slug,
        name
       }
   }`,
    { slug }
  );
  return data;
}

export async function getPosts() {
  const data = await client.fetch(groq`*[_type=="post"]{
       ...,
       'image': image.asset->.url,
       _id,
       title,
       description,
       style,
       author->,
       tags[]-> {
        _id,
        slug,
        name
       }
   }`);

  return data;
}
