import React, {useState, useEffect} from 'react'
import Post from '../Post'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch('/feed')
            const response = await res.json()
            setPosts(response.posts)
        }
        fetchPosts();
        return;
    }, []) 


    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <ul class="row list-unstyled">
                    {
                        posts.map((e,i) => {
                            return (
                                <Post ID={e._id} image={e.image} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Feed