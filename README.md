# MyApp-veritas

Download API https://github.com/estopaceadrian/my-api-veritas
> npm install  (to install packages)
> start the app by typing node app.js (Once server says DB is connected, the API is Live)

Download App https://github.com/estopaceadrian/MyApp-veritas
> npm install (to install packages)
> Go to Screen Folder > Home.js 
![image](https://user-images.githubusercontent.com/12807154/190009943-68d7d353-6552-4b39-8d9d-951fd023baf8.png)
> Change the value of "192.168.0.11" to your local IP
> start the app by typing npm start.
#still working on redux

API Documentation ->
• Can add and fetch new products, product ID, category, edit specific product, delete product and get count of total products
• Can fetch all category, Category ID, create category, edit category and delete category.

Models: 

=======================================
CATEGORY:  
name: { type: String, required: true },

=======================================
PRODUCT: 
name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  dateCreated: { type: Date, default: Date.now },
  quantity: { type: Number, required: true, min: 0, max: 255 },
  price: { type: Number, default: 0 },
  description: { type: String, default: '' },
