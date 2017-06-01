export default ({
    title,
    yearReleased,
    directors,
    writers,
    cast
}) => (
    <article>
        <h2>{ title }</h2>
        <h4>{ yearReleased }</h4>
        <div>
            Directors:
        {
            directors.map(director => (
                <span>{ director.name }</span>
            ))
        }
        </div>
    </article>
)