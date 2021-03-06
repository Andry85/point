import React, { Component } from 'react';

import Comment from '../comment';

import './news.css';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {}
        };
    }

    componentDidMount() {
        fetch('https://gnews.io/api/v3/top-news?token=4bd85d8342eecb7c7a083aaae1b36583')
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                items: result.articles
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            );
        })

    }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div>
                    <ul className="newsArticle">
                        {items.map((e, i) => (
                            <li className="newsArticle__item" key={i}>
                                <h2 className="newsArticle__titile"><a target="_blank" href={e.url}>{e.title}</a></h2> 
                            </li>
                    ))}
                    </ul>
                    <Comment/>
                </div>
            );
        }
       
    }
}
export default News; 


