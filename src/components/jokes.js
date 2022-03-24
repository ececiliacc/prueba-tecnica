import React from 'react';
import {getJokes} from './library';
import Categories from "./Categories";
import JokeCard from './Card';
import {JokesListStyle} from './styles.js';
import Scroll from './Scroll.js';

class Jokes extends React.Component {

  state={
      jokes:[],
      categories:[],
      selectedCategory:"",
      loading:false,
      parPage:1
  };

  setLoading = () => {
      const { loading } = this.state;
      if (loading) {
        return;
      }
      this.setState({ loading: true });
    };

    loadJokes = async () => {
      const { jokes, selectedCategory, parPage } = this.state;

      const newJokes = await getJokes(parPage, selectedCategory).catch(err =>
        console.log(err)
      );
     
      this.setState({ loading: false, jokes: [...jokes, ...newJokes] });
    };
  
  getCategories = async () =>{
      const results = await fetch ("https://api.chucknorris.io/jokes/categories");
      const categories =await results.json();
      this.setState({categories})
  };

  handleSelect = (e) => {

    this.setState(
      {
        selectedCategory: e.target.value

      },
      this.loadJokes
    );
  };

  componentDiMount =() => {
      this.getCategories();
  };

  render () {
      
    const { jokes, loading, categories } = this.state;
    const hasMore = !(jokes.length === 30);

      return (

        <Scroll
        loadMore={this.loadJokes}
        setLoading={this.setLoading}
        loading={loading}
        hasMore={hasMore}
        >
          <>
          <Categories categories={categories} onChange= {this.handleSelect} />

          <JokesListStyle>
           
            {jokes &&
              jokes.map((joke, index) => (
                <JokeCard key={`${joke.id}-${index}`} joke={joke.value} />
              ))}
  
            {!hasMore && (
              
                <p>no more jokes</p>
            
            )}
          </JokesListStyle>
          </>
        </Scroll>  
          
      )
  }

}

export default Jokes;







