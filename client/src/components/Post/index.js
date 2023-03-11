import React from 'react'

const Post = (props) => {
    return (
        <li className="col-6 justify-content-between mt-5">
            <a href={"/post/"+ props.ID}>
                <img className="img-fluid" src={props.image}></img>
            </a>
        </li>
    )
}

export default Post