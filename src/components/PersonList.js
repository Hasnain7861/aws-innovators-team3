import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://ck0uehcs0k.execute-api.us-west-2.amazonaws.com/PROD/get-todo`)
      .then(res => {
        const persons = res.data.body;
        this.setState({ persons });
      })
  }

  getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  }

  render() {
    const { persons } = this.state;

    if (persons.length === 0) {
      return (
        <div className="person-list-container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading team members...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="person-list-container">
        <ul className="person-grid">
          {persons.map(person => (
            <li key={person.id} className="person-card">
              <div className="card-content">
                <div className="person-avatar">
                  <span className="avatar-text">{this.getInitials(person.name)}</span>
                </div>
                <div className="person-info">
                  <span className="person-id">ID: {person.id}</span>
                  <h3 className="person-name">{person.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
