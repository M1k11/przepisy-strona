import React, { Component } from 'react';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  handleSearch = () => {
    const { query } = this.state;
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(query);
    }
  };

  render() {
    return (
      <Box textAlign="center" my={4}>
        <Typography variant="body1">
          Search your own recipe
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              fullWidth
              label="Search recipes"
              variant="outlined"
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default SearchBar;