import React from 'react';
import axios from 'axios';
import UserSearchHistoryEntry from './userSearchHistoryEntry.jsx';

const { Table } = require('semantic-ui-react');

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      searchHistory: []
    };

    console.log(this.state.searchHistory.cities);
  }

  componentWillMount() {
    this.getHistory();
  }

  getHistory() {
    axios.get('/api/history')
    .then((response) => {
      const displayName = 'response.user_id';
      const previousSearches = response.data;

      // console.log('previousSearches:', previousSearches);
      console.log('response:', response);
      console.log('Setting searchHistory to: ', previousSearches);
      this.setState({
        userName: displayName,
        searchHistory: previousSearches
      });
    });
  }

  render() {
    return (
      <div className="userSearchHistory-background">
        <div className='userSearchHistory-container'>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Search Temperature</Table.HeaderCell>
                <Table.HeaderCell className="searchDateHeader">Search Date</Table.HeaderCell>
                <Table.HeaderCell>Recommended Cities</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                this.state.searchHistory.map(searchEntry =>
                  <UserSearchHistoryEntry
                    doHistoricalSearch={this.props.doHistoricalSearch}
                    searchEntry={searchEntry}
                  />
                )
              }
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

module.exports = SearchHistory;
