import React from 'react'
import { Link } from 'react-router-dom'

function BlogTittle({ headingtitle,blogbradcumtitle}: {headingtitle: string,blogbradcumtitle:string}) {
    return (
        <div>
            <section className="blog about-blog">
                <div className="container">
                    <div className="blog-bradcrum">
                        <span><Link to={"/"}>Home</Link></span>
                        <span className="devider">/</span>
                        <span><a href="#"> {headingtitle}</a></span>
                    </div>
                    <div className="blog-heading about-heading">
                        <h1 className="heading">{blogbradcumtitle}</h1>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BlogTittle