import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const updateNews= async() =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  
    props.setProgress(100);

}

useEffect(() => {
  updateNews();
  document.title = ` News365 | ${capitalizeFirstLetter(props.category)}`;
   // eslint-disable-next-line
}, [])



const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  let data = await fetch(url);
  let parsedData = await data.json()
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
  setLoading(false);
}
    return (
        <>
            <div className="text-center">
            <h1>News<strong>365</strong>  - <b>Top {capitalizeFirstLetter(props.category)} Headlines</b></h1>
            </div>     

            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
                endMessage={
                    <p style={{ textAlign: 'center',fontFamily: 'Quicksand',marginTop: '10rem'}}>
                      <b>No more News available in {capitalizeFirstLetter(props.category)} for now</b>
                    </p>
                }
            >
            <div className="container">
              
          <div className="row">
          {articles.map((element)=>{
            return <div className="col-md-6" key={element.url}>
            <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} dt={element.publishedAt}/>
            </div>

          })}
          </div>
          
          </div>
        </InfiniteScroll>
      </>
    )
}


News.defaultProps = {
  country : 'in',
  pageSize : 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;