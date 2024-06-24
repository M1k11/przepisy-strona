import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import SearchBar from './SearchBar'; // Importujemy dolny SearchBar

const APP_ID = '3bc7c5d4';
const APP_KEY = '38df90739b0c0377b6d084eaf3a39cd4';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchRecipes('chicken'); // Początkowe wyszukiwanie przykładowe
  }

  fetchRecipes = (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;

    axios.get(url)
      .then(response => {
        this.setState({
          recipes: response.data.hits,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        console.error("Wystąpił błąd podczas żądania API:", error);
        this.setState({
          error: error,
          isLoading: false
        });
      });
  };

  handleSearch = (query) => {
    this.fetchRecipes(query);
  };

  render() {
    const { recipes, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Ładowanie...</p>;
    }

    if (error) {
      return <p>Wystąpił problem: {error.message}</p>;
    }

    return (
      <Container>
        {/* Dolny SearchBar */}
        <SearchBar onSearch={this.handleSearch} />

        <Grid container spacing={4}>
          {recipes.map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="card-custom">
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {recipe.recipe.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.recipe.source}
                  </Typography>
                  <Link href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                    Zobacz przepis
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default LandingPage;