const express = require('express');
const http = require('http');
const cors = require('cors');
const BASE_URL_API = 'https://api.mercadolibre.com';
const axios = require('axios');
const app = express();
app.use(cors());
app.server = http.createServer(app);

app.use(function(req,res,next){
  res.author = {
    name: 'Gonzalo',
    lastname: 'Farré'
  }
  next()
})

app.get('/api/items', (req, res) => {
  const query = req.query.q;
  axios.get(`${BASE_URL_API}/sites/MLA/search?q=:${query}&limit=4`)
    .then(({
      data: {
        filters,
        results
      }
    }) => {
      const author = res.author ? res.author : 'No Author';
      
      let categories = filters.find(({ id }) => id === 'category');
      categories = categories ? categories.values[0].path_from_root.map(({ name }) => name) : [];
      
      //getting string array
      let stringIds = []; 
      results.forEach((item) =>{
        stringIds.push(item.id)
      })
      let searchString = '';
      searchString = stringIds.join(",");
      axios.get(`${BASE_URL_API}/items?ids=${searchString}`)
        .then(imageData => {
          const imagesArray =imageData.data.map(item => {
            return {id: item.body.id, pictureUrl: item.body.pictures[0].url}
          });
          
          const items = results.map(({
            id,
            title,
            price,
            currency_id,
            thumbnail,
            condition,
            shipping,
            address
          }, index) => {
            const arrayPrice = String(price).split('.');
            const amount = Number(arrayPrice[0]);
            const decimals = (Number(arrayPrice[1]) / 100) || 0;
            return { 
              id,
              title,
              condition,
              picture: imagesArray[index].pictureUrl,
              free_shipping: shipping.free_shipping,
              origin: address.state_name,
              price: {
                currency: currency_id,
                amount,
                decimals
              }
            }
          });
     
        res.status(200).send({ author, categories, items });
      });
        })      
});

app.get('/api/items/:id', (req, res) => {

  const productId = req.params.id;

  axios.all([
    axios.get(`${BASE_URL_API}/items/${productId}`),
    axios.get(`${BASE_URL_API}/items/${productId}/description`)
  ])
  .then(axios.spread(({
    data: { 
      price,
      id,
      title,
      currency_id,
      thumbnail,
      condition,
      pictures,
      sold_quantity,
      category_id,
      shipping: {
        free_shipping
      }
    }}, {
      data: {
        plain_text
      }
    }) => {
    const author = res.author ? res.author : 'No Author';
    const arrayPrice = String(price).split('.');
    const amount = Number(arrayPrice[0]);
    const decimals = (Number(arrayPrice[1]) / 100) || 0;
    let picture = {};
    if (pictures.length > 0 ){
      picture = pictures[0].url;
    }
    const item = {
      id,
      title,
      price: {
        currency: currency_id,
        amount,
        decimals,
      },
      picture: pictures.length > 0 ? picture : thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description: plain_text,
      category_id
    }

    return { author, item};
  }))
  .then(({ author, item }) => {
    if(item.category_id) {
      axios.get(`${BASE_URL_API}/categories/${item.category_id}`)
      .then(({ data: { path_from_root } }) => {
        item.categories = path_from_root.map(cat => cat.name);
        delete item.category_id;
        res.status(200).send({ author, item });
      })
      .catch(err => {
        delete item.category_id;
        item.categories = [];
        res.status(200).send({ author, item });
      });
    } else {
      item.categories = [];
      res.status(200).send({ author, item });
    }
  })
  .catch(err => res.status(400).send(err));
});

app.server.listen(8080);