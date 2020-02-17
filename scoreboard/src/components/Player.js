import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './Icon';
import PropTypes from 'prop-types';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    };

    render() {
        const { 
            name,
            id,
            score,
            index,
            removePlayer,
            changeScore,
            isHighScore
        } = this.props;
        console.log(name + ' rendered');
        return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <Icon isHighScore= {isHighScore}/>
                { name }
              </span>
        
              <Counter score={score}
                  changeScore={changeScore}
                  index={index}
              />
            </div>
          );
    }
    
    
  }
  export default Player;