

"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import PropTypes from 'prop-types';
import blogsData from '../../../data/blogData';  // Import the blogs data
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
      <span className="text-4xl leading-none text-[#F68921]">L</span> orem ipsum
      dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque
      dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum!
      Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum
      voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum,
      exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur
      officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis
      soluta enim molestiae ratione numquam fugit, dicta mollitia atque
      cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab
      molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur
      fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui
      necessitatibus, facilis voluptate inventore quod similique voluptates eum,
      repudiandae aliquid ea eveniet itaque et molestias temporibus debitis
      consectetur sit quae modi non minima distinctio hic quasi aspernatur!
      Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt
      accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae
      unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium
      exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos,
      molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus
      aperiam praesentium animi magnam, quo totam tempore quod impedit
      cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus.
      Asperiores eos cupiditate optio quae aut molestiae fugiat alias id,
      tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum
      quisquam!
    </p>
    <Avatar />
  </div>
);

const SideBar = ({ blogs }) => (
  <div>
    <div>
      <h4 className="text-2xl font-medium mb-2">Blog Post</h4>
      <p className="opacity-75">
        Holisticly re-engineer long-term high-impact convergence via emerging
        bandwidth. Distinctively repurpose real-time opportunities without
        long-term high-impact potentialities. Interactively monetize corporate
        outsourcing before unique core competencies.
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
        15 Jan 2022 in Design, Develop, Wordpress
      </p>
      <p className="opacity-75">
        In et volutpat risus. Vestibulum at elementum nibh, at laoreet mauris.
        Ut eget mi in nisl rhoncus suscipit. Donec sed elementum dui. Sed tempus
        sagittis gravida. Etiam sit amet aliquam mauris, non sodales sapien.
        Curabitur non arcu dignissim, consectetur mi ut.
      </p>
    </div>
  </div>
);

const BlogDetails = ({ blogs = blogsData }) => {  // Provide a default value for blogs
  const { id } = useParams();  // Use useParams to get the blog id
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
          className="h-[430px] w-full object-cover"
        />
        <div className="py-4 flex justify-center items-center gap-4 px-5 absolute inset-0 flex justify-center items-center text-white text-2xl font-bold">
          <div>
          <Link href="/" className="hover:text-[#F68921] pt-2">
              Home
            </Link>
          </div>
          <div>
            <FaChevronRight />
          </div>
          <div>
          <Link href="/blog" className=" hover:text-[#F68921] pt-2">
              Blog
            </Link>
          </div>
          <FaChevronRight />
          <div>
          <Link href="/blog/1" className="text-[#F68921] pt-2">
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
