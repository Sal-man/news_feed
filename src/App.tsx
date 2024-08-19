
import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsFromApi1, fetchNewsFromApi2,  } from './store/newsSlice';
import { RootState, AppDispatch } from './store/store';
import NewsCard from './components/NewsCard';
import SearchBar from './components/Search';
import SkeletonLoader from './components/Skeleton';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsFromApi1(''));
    dispatch(fetchNewsFromApi2(''));
  }, [dispatch]);

  if (loading) return <div className='skeleton_conntainer'>
  {Array(4)
    .fill(0)
    .map((_, index) => <SkeletonLoader key={index} />)}
    </div>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      <div className="araticles_list">
        <h3>News</h3>
        <SearchBar />
        <div className='articles_wrapper'>

        {articles.map((article, index) => (
            <NewsCard
              key={index}
              image={article.image}
              title={article.title}
              description={article.description}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
