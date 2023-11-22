import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import book1Image from '../Assets/book1.jpeg';
import book2Image from '../Assets/book2.jpeg';
import book3Image from '../Assets/book3.jpeg';
import book4Image from '../Assets/book4.jpeg';
import book5Image from '../Assets/book5.jpeg';
import book6Image from '../Assets/book6.jpeg';
import book7Image from '../Assets/book3.jpeg';
import book8Image from '../Assets/book1.jpeg';
import book9Image from '../Assets/book4.jpeg';
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const bookData = [
    { id: 1, title: 'Shawshank', image: book1Image, details: 'J. K. Rowling' },
    { id: 2, title: 'Ruby', image: book2Image, details: 'Stephen King' },
    { id: 3, title: 'The Martian', image: book3Image, details: 'Charles Dickens' },

    { id: 1, title: 'Life of Pi', image: book4Image, details: 'Roald Dahl' },
    { id: 2, title: 'Gullivers travel', image: book5Image, details: 'Arundhati Roy' },
    { id: 3, title: 'The Hobbit', image: book6Image, details: 'Dr. Seuss' },

    { id: 1, title: 'Shaw redemption', image: book7Image, details: 'Rohit' },
    { id: 2, title: 'Beast', image: book8Image, details: 'Jay Shetty' },
    { id: 3, title: '50 Shades', image: book9Image, details: 'Pant Singh' },
  ];

const BookCatalog = () => {
  return (
    <div>
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {bookData.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <a href='hgfh'><Card>
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
            </Card></a>
          </Grid>
        ))}
      </Grid>
      {}
      <br></br><br></br>
    </Container>
    <Box
    component="footer"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      p: 6,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are BookScape, dedicated to providing the best service to our
            customers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            10 Dowing Street, NY, USA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: bookscape@example.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +91 73717 37372
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Follow Us
          </Typography>
          <Link href="https://www.facebook.com/" color="inherit">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}
          >
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" color="inherit">
            <Twitter />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright ©️ "}
          <Link color="inherit" href="https://your-website.com/">
            BookScape
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  </Box>
  </div>
  );
};

export default BookCatalog;
