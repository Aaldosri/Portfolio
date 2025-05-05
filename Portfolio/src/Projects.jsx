import React, { useState } from "react";

// External Libraries
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
const projects = [
  {
    title: "مشروع 1",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 2",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 3",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 4",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects({ darkMode }) {
  return (
    <>
      <section className="min-h-[600px] text-center mt-50">
        <div className="relative inline-block group text-center mb-20">
          <h1
            className="text-4xl mb-5 text-center text-[#b33939]"
            style={{ fontFamily: "TajawalBold" }}
          >
            المشاريع
            <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
          </h1>
        </div>

        <div>
          <Grid container spacing={4} justifyContent="center">
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item}>
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard {item}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}
