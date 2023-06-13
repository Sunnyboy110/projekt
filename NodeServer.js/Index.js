const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
 host: 'localhost',
 port: 5432,
 user: 'postgres',
 password: 'X2ABQP40',
 database: 'postgres'
});



app.use(express.static('../projekt/dist/projekt'));

app.get('/search', async (req, res) => {
    
    const client = await pool.connect();
    try { 
        const searchText = req.query.searchText;
        console.log(searchText)
        const quearyString = "SELECT * from vare WHERE vare_navn ILIKE '%" + searchText + "%'";
        const result = await client.query(quearyString)
        console.log(result.rows)
        res.send(result.rows)
    } catch (e) { 
        console.error(e.stack)
    } finally {
        client.release()
    }
}); 

// app.post('/search', async (req, res) => {
    
//     const client = await pool.connect();
//     try { 
//         const searchText = req.query.searchText;
//         console.log(searchText)
//         const quearyString = "SELECT * from vare WHERE vare_navn ILIKE '%" + searchText + "%'";
//         const result = await client.query(quearyString)
//         console.log(result.rows)
//         res.send(result.rows)
//     } catch (e) { 
//         console.error(e.stack)
//     } finally {
//         client.release()
//     }
// }); 
    
app.listen(3000, () => {
 console.log('Web server app listening on port 3000!');
});

