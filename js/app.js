$(document).ready(()=>{
    // dynamic articles
    let posts = [
        {
            title: "¡Hello World!",
            date: "Posted on "+moment().format("MMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit dolores minima quia sit quae error consequatur? Maxime dolores dignissimos odio nisi reprehenderit eligendi, facilis repudiandae ducimus ipsum? Fugit, dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni."
        },
        {
            title: "¡Hello World!",
            date: "Posted on "+moment().format("MMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit dolores minima quia sit quae error consequatur? Maxime dolores dignissimos odio nisi reprehenderit eligendi, facilis repudiandae ducimus ipsum? Fugit, dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni."
        },
        {
            title: "¡Hello World!",
            date: "Posted on "+moment().format("MMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit dolores minima quia sit quae error consequatur? Maxime dolores dignissimos odio nisi reprehenderit eligendi, facilis repudiandae ducimus ipsum? Fugit, dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni."
        },
        {
            title: "¡Hello World!",
            date: "Posted on "+moment().format("MMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit dolores minima quia sit quae error consequatur? Maxime dolores dignissimos odio nisi reprehenderit eligendi, facilis repudiandae ducimus ipsum? Fugit, dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni."
        },
        {
            title: "¡Hello World!",
            date: "Posted on "+moment().format("MMM Do YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit dolores minima quia sit quae error consequatur? Maxime dolores dignissimos odio nisi reprehenderit eligendi, facilis repudiandae ducimus ipsum? Fugit, dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi fugit, vero sunt harum explicabo dolores molestias dicta numquam maiores eum repudiandae debitis odit veritatis. Blanditiis iure fugiat veniam magni."
        }
    ];
    posts.forEach((article, index)=>{
        let post = `
        <article class="section__article">
            <div class="article--header">
                <div class="article__left">
                    <h2>${article.title}</h2>
                    <p>${article.date}</p>
                </div>
                <button>📰 Comments</button>
            </div>
            <p class="paragraph">${article.content}</p>
        </article>`;
        $(".section").append(post);
    });
});