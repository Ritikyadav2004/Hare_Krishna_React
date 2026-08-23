# API Call Flow

```mermaid
flowchart TD
  A[Product component loads] --> B[useEffect runs]
  B --> C[dispatch fetchProducts]
  C --> D[fetch API returns Promise<Response>]
  D --> E[await gives response]
  E --> F[response.json returns Promise]
  F --> G[await gives data object]
  G --> H[return data.products]
  H --> I[Redux fulfilled action]
  I --> J[action.payload]
  J --> K[state.products]
  K --> L[useSelector reads products]
  L --> M[React component uses products]
```

## Simple Return Flow

```text
fetch(url)
  -> Promise<Response>

await fetch(url)
  -> response object

response.json()
  -> Promise<data object>

await response.json()
  -> data object

return data.products
  -> products array

Redux fulfilled action
  -> action.payload = products array

state.products = action.payload
  -> Redux stores products

useSelector((state) => state.products.products)
  -> component receives products array
```
