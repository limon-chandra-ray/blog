import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../Ui/Card'
import blogPosts from '../../media/data/blog.json'
const BlogPost = (props) => {
    console.log(props)
    const[posts,setPost] = useState({});
    useEffect(()=>{
        fetch(`blogPosts.data.join/$(posts)`)
        const postid = props.match.params.postid;
        const post = blogPosts.data.find(post=>post.id===postid);
        setPost(post);
    },[posts]);
    return (
        <div className="blogpost">
            <Card>
                <div className="cardHeader">
                    <h5 className="category" >Featured</h5>
                    <p className="blogtitle">{posts.blogTitle}</p>
                    <span className="poston">postedOn July 21, 2016 Faiz Khan</span>
                    <img className="blogimage" alt="featured" src={require('../../media/Blogimage/memories-from.jpg')}></img>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost



