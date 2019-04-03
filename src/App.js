import React, { Component } from 'react';
import './App.css';
import { Button, ButtonGroup } from 'react-bootstrap';

class App extends Component {

  state={
    post:'',
    posts:[],
  };

  onSummit=(event)=>{
    event.preventDefault();

    //this.state.posts.push(this.state.post);

    console.log(this.state.posts);

    //this.setState({posts: this.state.posts});

    this.setState((prevState)=>{
        return {
            posts:prevState.posts.concat(this.state.post)
        };
    });
  };

  deletePostHandler=(index)=>{
    let tempPosts=[...this.state.posts];

    tempPosts.splice(index, 1);

    console.log('tempPost '+tempPosts);
    console.log(index);
    this.setState({posts:[...tempPosts]});
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSummit} className="form-group">
          <input placeholder="Add your post here" onChange={(event)=>this.setState({post:event.target.value}) }/>  <button className="btn btn-primary">Submit</button>
        </form>
        {this.state.posts.map((post, index)=>{
          return <div className="" key={index} onClick={()=>this.deletePostHandler(index)}>{post}</div>
        })}

      </div>
    );
  }
}

export default App;
