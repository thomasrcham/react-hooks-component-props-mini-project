import React from "react";

function About({ image, about }) {
    let img = { image }
    return (
        <aside>
            {img ? <img src={image} alt='blog logo' /> : <img src='https://via.placeholder.com/215' alt='placeholder' />}
            <p>{about}</p>
        </aside>

    )
}

export default About