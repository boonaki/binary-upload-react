import React, { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function PostPage() {
    let { id } = useParams();
    //post state
    const [post, setPost] = useState({})

    const [isLiked, setIsLiked] = useState(false)

    //requesting-user state
    const [user, setUser] = useState('')

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`/post/${id}`)
            const response = await res.json()
            setPost(response.post)
            setUser(response.user)
            // setIsLiked(response.isLiked) //no serverside code to check if post is liked by requser
        }
        fetchPost()
        return
    }, [])

    async function handleLike(e){
        e.preventDefault()
        if(!isLiked){
            await fetch(`/post/likePost/${id}?_method=PUT`)
                .catch(err => console.error(err))
            setIsLiked(true);
        }
    }

    const navigate = useNavigate()
    async function handleDelete(e){
        e.preventDefault()
        if(user === post.user){
            await fetch(`/post/deletePost/${id}?_method=DELETE`, {
                'method': "POST",
            })
            navigate('/profile')
        }
    }

    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-6">
                    <h2>{post.title}</h2>
                    <img class="img-fluid" src={post.image} />
                    <div class="row justify-content-between">
                        <form
                            class="col-1"
                        >
                            <button class="btn btn-primary fa fa-heart" style={isLiked ? {color: '#ff3e3e'} : {color: '#FFFFFF'}} onClick={handleLike}></button>
                        </form>
                        <h3 class="col-3">Likes: {post.likes}</h3>
                        {user === post.user ?
                            (
                            <form
                                class="col-3"
                                
                                onSubmit={handleDelete}
                            >
                                <button class="btn btn-primary fa fa-trash" type="submit"></button>
                            </form>
                            )
                            :
                            (
                                ""
                            )
                        }
                    </div>
                </div>
                            {/* <DeletePost userId={user} postUser={post.user} postId={post.id} /> */}
                <div class="col-3 mt-5">
                    <p>{post.caption}</p>
                </div>
                <div class="col-6 mt-5">
                    <a class="btn btn-primary mx-3" href="/profile">Return to Profile</a>
                    <a class="btn btn-primary mx-3" href="/feed">Return to Feed</a>
                </div>
            </div>
        </div>
    )
}