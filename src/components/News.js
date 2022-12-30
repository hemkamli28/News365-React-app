import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
 
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82edc5b0f9ec4767b9333806006fc21e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData =  await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })

  }

  handlePrevClick= async()=>{
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82edc5b0f9ec4767b9333806006fc21e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData =  await data.json();
    this.setState({
      page: this.state.page - 1, 
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async()=>{
      this.setState({loading:true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82edc5b0f9ec4767b9333806006fc21e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      
      let data = await fetch(url);
      let parsedData =  await data.json();
      this.setState({
        page: this.state.page + 1, 
        articles: parsedData.articles,
        loading: false
      })
    
  }

  render() {
    return (
        <>
        <div className="container my-2">
            <h1>News<strong>365</strong>  - <b>Top Headlines</b></h1>
            {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-6" key={element.url}>
            <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} dt={element.publishedAt}/>
            </div>

          })}
          <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        </div>

      </>
    )
  }
}
