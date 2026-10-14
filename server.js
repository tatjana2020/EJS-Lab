const {restaurant} = require('./data.js')
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.set('view engine', 'ejs');


// EJS ROUTES WITH .RENDER
// GET ROUTE - INDEX
app.get("/", (req, res) => {

      console.log(restaurant)
      res.render("home.ejs", {restaurant: restaurant})
});

app.get('/menu', (req, res) => {
  res.render('menu', { menu: restaurant.menu });
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;

  const menuItems = restaurant.menu.filter(item => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  res.render('category', { menuItems, categoryName });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});