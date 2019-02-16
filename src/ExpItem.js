import React, { Component } from 'react';
import './ExpItem.css';

class ExpItem extends Component {
  render() {
    return (
      <div className="ExpItem">

      
        <img className = "image" src={this.props.imgName} />

        <div className="fuck-shit">
          <p className = "titlewtf">
              {this.props.title}
          </p>
          
          <p className = "descriptionwtf">
            {this.props.description}
          </p>
        </div>

      </div>
    );
  }
}

export default ExpItem;