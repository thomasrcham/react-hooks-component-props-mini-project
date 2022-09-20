import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
    return (
        <main>
            {articles.map((item) => {
                return <Article
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    preview={item.preview} />
            })}
        </main>
    )

}

export default ArticleList;