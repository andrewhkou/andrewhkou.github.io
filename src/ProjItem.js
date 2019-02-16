import React, { Component } from 'react';
import './ProjItem.css';

class ProjItem extends Component {
  render() {
    return (
      <div className="ProjItem">

        <img src={this.props.imgName} />

        <p>
            {this.props.title}
        </p>
        
        <p>
          {this.props.description}
        </p>

      </div>
    );
  }
}

export default ProjItem;