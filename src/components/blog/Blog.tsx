import React, { useState } from 'react'
import './blog.css';
import BlogCard from './blogCard/BlogCard';
import { data } from './data';
import { Title } from '..';

export interface Props {
    items: {
        id: number;
        title: string;
        image: string;
        heading: string;
        desc: string;
    }[]
}

const Blog = () => {
    const [blog, setBlog] = useState<Props['items']>(data)
  return (
    <div className="blog">
        <Title title='Trending Topics Blog' subHeading='BizBag Blog' text='It is a long established fact that a reader will be distracted'/>
        <BlogCard blog={blog} />
    </div>
  )
}

export default Blog