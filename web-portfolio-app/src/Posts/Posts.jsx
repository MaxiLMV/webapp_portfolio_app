import "./Posts.css";

function Posts() {
    return (
        <div id="all-posts" className="posts">
            <h2 className="posts-title">Posts</h2>
            <ul className="posts-list">
                <li className="posts-link"><a href="#">Post1</a></li>
                <li className="posts-link"><a href="#">Post2</a></li>
                <li className="posts-link"><a href="#">Post3</a></li>
            </ul>
        </div>
    );
}

export default Posts;