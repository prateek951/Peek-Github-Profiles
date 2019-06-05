import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
export default class PageUser extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount = () => {
    const {
      getUser,
      getRepos,
      match: {
        params: { id }
      }
    } = this.props;
    getUser(id);
    getRepos(id);
  };

  render() {
    const {
      user: {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      },
      loading,
      repos
    } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
          Hirable : {""}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card-grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                alt=""
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location : {location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Blog or Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-success">Following: {public_gists}</div>
          </div>
          <Repos repos={repos} />
        </Fragment>
      );
    }
  }
}
