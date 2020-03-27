import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={badge.avatarUrl} alt="Avatar" />
                  </div>
                  <div className="col-8">
                    <li key={badge.id}>
                      <h5>
                        {badge.firstName} {badge.lastName}
                      </h5>
                      <span className="font-weight-bold text-info"><i className="fa fa-twitter"></i>@{badge.twitter}</span>
                      <p><span className="font-weight-bold">{badge.jobTitle}</span></p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
