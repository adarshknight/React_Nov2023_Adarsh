// NewArrivalsPage.js
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bookData from './BookCatalog';

const NewArrivalsPage = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {bookData.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Link to={`/book/${book.id}`}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={book.image}
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.details}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewArrivalsPage;
