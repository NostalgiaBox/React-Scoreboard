import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

  


class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        isHighScore: false 
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        isHighScore: false 
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        isHighScore: false 
      },
      {
        name: "James",
        score: 0,
        id: 4,
        isHighScore: false 
      }
    ]
  };


  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    console.log(index);
  }
  
  getHighScore = () => {
    const scores = this.state.players.map( p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return{
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1,
        }
      ]
    };
    })

  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
    
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer} 
            isHighScore={highScore === player.score}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
