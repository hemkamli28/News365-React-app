import React, { Component } from 'react'
export default class NewsItem extends Component {
  render() {

    let {title,desc,imageUrl,newsUrl,source,dt,author } = this.props;
    return (
        <>
        <div className="container">
          <div className="card" >
            <img src={imageUrl?imageUrl:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"} className="card-img-top" alt="..."/>

          <div className="badge">
              <p>{source}</p>
          </div>
            <div className="card-body">
              <h5 className="card-title">{title.length>84?title.slice(0,84)+"...":title}</h5>
              <p className="card-text">{desc.length>210?desc.slice(0,200)+"...":desc}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(dt).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
      </>
    )
  }
}
