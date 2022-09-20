import React from "react";

function Article({ date, title, preview }) {
    let dateCheck = date
    return (
        <article>
            <h3>{title}</h3>
            {dateCheck ? <small>{date}</small> : <small>January 1, 1970</small>}
            <p>{preview}</p>

        </article>
    )

}


export default Article