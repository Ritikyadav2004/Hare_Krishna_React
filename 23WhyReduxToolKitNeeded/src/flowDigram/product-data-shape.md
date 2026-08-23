# Product Data Shape

The API response contains a `products` array. In this example, the array contains
30 product objects. Every product object has the same 22 top-level fields:

```text
data
  └── products (array of 30 products)
        └── product (one object)
              ├── id: 1
              ├── title: "Essence Mascara Lash Princess"
              ├── description: "The Essence Mascara Lash Princess..."
              ├── category: "beauty"
              ├── price: 9.99
              ├── discountPercentage: 10.48
              ├── rating: 2.56
              ├── stock: 99
              ├── tags: ["beauty", "mascara"]
              ├── brand: "Essence"
              ├── sku: "BEA-ESS-ESS-001"
              ├── weight: 4
              ├── dimensions: { width: 15.14, height: 13.08, depth: 22.99 }
              ├── warrantyInformation: "1 week warranty"
              ├── shippingInformation: "Ships in 3-5 business days"
              ├── availabilityStatus: "In Stock"
              ├── reviews: [3 review objects]
              ├── returnPolicy: "No return policy"
              ├── minimumOrderQuantity: 48
              ├── meta: { createdAt, updatedAt, barcode, qrCode }
              ├── images: [image URLs]
              └── thumbnail: "thumbnail image URL"
```

## Important Understanding

There are **30 items**, not 30 fields:

```text
products[0] -> first product: Essence Mascara Lash Princess
products[1] -> second product
products[2] -> third product
...
products[29] -> thirtieth product
```

To display the first product's image and title:

```jsx
<img src={products[0]?.thumbnail} alt={products[0]?.title} />
<h2>{products[0]?.title}</h2>
```

To display all 30 products:

```jsx
{products.map((product) => (
  <div key={product.id}>
    <img src={product.thumbnail} alt={product.title} />
    <h2>{product.title}</h2>
  </div>
))}
```

`dimensions`, `reviews`, `meta`, `tags`, and `images` are nested values. Their
inner values can also be counted separately, so the total feature count can vary.