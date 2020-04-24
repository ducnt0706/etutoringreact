import React, { Component } from 'react';

class Postview extends Component {
    render() {
        return (
            <div className="col-lg-8">
                  <div className="daily-feeds card">
                    <div className="card-close">
                      <div className="dropdown">
                            <button type="button" className="dropdown-toggle">
                                <i className="fa fa-ellipsis-v"></i>
                            </button>          
                      </div>
                    </div>

                    <div className="card-header">
                      <h3 className="h4">Daily Posts</h3>
                    </div>

                    <div id="tutor-post-box" className="card-body no-padding">
                        

                      
                    </div>

                  </div>
                </div>
        );
    }
}

export default Postview;