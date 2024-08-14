"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import PropTypes from 'prop-types';
import blogsData from '@/data/blogData';  
import ErrorPage from '@/components/404Page';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';


const comments = [
  {
    author: "George Codex",
    title: "Blue Seduction",
    link: "#",
  },
  {
    author: "Kontramax",
    title: "Sticky Post With Left Sidebar",
    link: "#",
  },
  {
    author: "Yann Yong",
    title: "Early stage disruptive",
    link: "#",
  },
];

const BlogItems = ({ blogs }) => (
  <div className="mt-12">
    <h4 className="text-2xl font-medium mb-6">RELATED POSTS</h4>
    {blogs.map((post, i) => (
      <div className="mt-4" key={i}>
        <div className="flex items-start">
          <img
            src={post.image}
            alt={post.title}
            width="50"
            className="max-w-full h-auto mr-3"
          />
          <div>
            <a href={`/blog/${post.id}`} className="font-semibold hover:text-[#F68921]">
              <h6>{post.title}</h6>
            </a>
            <p className="opacity-75">{post.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Comment = () => (
  <div className="mt-12">
    <h4 className="text-2xl font-medium mb-6">RECENT COMMENTS</h4>
    <div className="border dark:border-gray-600 rounded-md p-8">
      <ul className="flex flex-col">
        {comments.map((item, i) => (
          <li className="border-b dark:border-b-gray-600 py-2" key={i}>
            <FontAwesomeIcon icon={faComment} className="mr-2" />
            {item.author} on
            <a href={item.link} className="font-semibold hover:text-[#F68921] transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Contents = ({ image, title }) => (
  <div className="ezy__blogdetails4-contents">
    <img
      src={image}
      alt={title}
      className="max-h-[600px] w-full rounded-md object-cover"
    />
    <p className="opacity-75 leading-relaxed text-justify mt-12">
      <span className="text-4xl leading-none text-[#F68921]">I</span> n the last decade, the book industry has reinvented itself. Books have become much more accessible to a broader public, especially in their newer digital formats. This shift is also visible in how traditional book clubs have naturally evolved into book blogs.
      If you’re an avid reader, creating a blog will give you the perfect platform to apply your passion for literature by writing book reviews, sharing novel recommendations, and most importantly, connecting with the online bookish community.
      We know you’re pretty booked, which is why we’ve broken down how to start a book blog into just 10 easy steps. From how to make a website, choosing a website template and blog name to learning which types of book blog posts to write, here’s what you need to do to be ready to publish
    </p>
    <Avatar />
  </div>
);

const SideBar = ({ blogs }) => (
  <div>
    <div>
      <h4 className="text-2xl font-medium mb-2">Blog Post</h4>
      <p className="opacity-75">
        Book blogs are a great way to discover new books, get recommendations from other readers and learn more about literature. They can also be a lot of fun to read, as book bloggers often have a unique voice and style.
      </p>
    </div>
    <Comment />
    <BlogItems blogs={blogs} />
  </div>
);

const Avatar = () => (
  <div className="bg-[#F68921] bg-opacity-10 flex items-start p-6 md:p-12 mt-6 md:mt-12">
    <img
      src="https://cdn.easyfrontend.com/pictures/users/user11.jpg"
      alt=""
      className="max-w-full h-auto rounded-full"
      width="70"
    />
    <div className="ml-4">
      <h5 className="font-medium text-xl mb-1">George Codex</h5>
      <p className="opacity-75 mb-2">
        15 Jan 2022 Genres: YA, Contemporary Fiction
      </p>
      <p className="opacity-75">
        I&aposm Greg and this is my virtual book den where I talk about books, films, and anything else that comes to mind. I&aposve always been an avid reader and I enjoy promoting authors and discussing my favorite books with others. I also do freelance writing and have written for the Knights of the Dinner Table magazine and the SF blog SFSignal.
        Blogger: Greg
        Genres: YA, Contemporary Fiction, Fantasy, and Historical Fiction.
      </p>
    </div>
  </div>
);

const BlogDetails = ({ blogs = blogsData }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  return (
    <section className="ezy__blogdetails4 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="relative w-full">
        <img
          src="/img/bg.jpg"
          alt=""
          className=" sm:h-[430px] w-full object-cover"
        />
        <div className="py-4 flex justify-center items-center gap-4 px-5 absolute inset-0 flex justify-center items-center text-white text-md sm:text-2xl font-bold">
          <div>
            <Link href="/" className="hover:text-[#F68921] pt-2">
              Home
            </Link>
          </div>
          <div>
            <FaChevronRight />
          </div>
          <div>
            <Link href="/blog" className="hover:text-[#F68921] pt-2">
              Blog
            </Link>
          </div>
          <FaChevronRight />
          <div>
            <Link href={`/blog/${id}`} className="text-[#F68921] pt-2">
              Blog Post
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 py-10 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-5 md:gap-6 lg:gap-10">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 order-2 md:order-1">
            <SideBar blogs={blogs} />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 order-1 md:order-2">
            <Contents image={blog.image} title={blog.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogDetails.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogDetails;




