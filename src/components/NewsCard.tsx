interface NewsCardProps {
  title: string;
  description: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({title, description, image}) => {
    return (
        <article>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

export default NewsCard
