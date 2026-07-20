import express from 'express'
const app=express();

app.get('/',(req,res)=>{
    res.send(" Hello from Server")
})

// get a list of 5 joke
app.get('/api/jokes', (req, res) => {
    const jokes = [

       
  {
    "id": 1,
    "title": "Science",
    "content": "Why don't scientists trust atoms? Because they make up everything!"
  },
  {
    "id": 2,
    "title": "Scarecrow",
    "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
  {
    "id": 3,
    "title": "Skeletons",
    "content": "Why don't skeletons fight each other? They don't have the guts!"
  },
  {
    "id": 4,
    "title": "Food",
    "content": "What do you call a fake noodle? An impasta!"
  },
  {
    "id": 5,
    "title": "Penguin",
    "content": "How does a penguin build its house? Igloos it together!"
  }


    ];
    res.json(jokes);
});

const PORT= process.env.PORT || 8000;

app.listen((PORT),()=>{
    console.log(`Server running at http://localhost:${PORT}`);

})

