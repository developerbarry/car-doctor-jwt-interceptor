const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
let cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

//Middleware 
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


//Verify Middleware
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send({ message: "Unauthorize Access" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: 'Unauthorize Access' });
        }

        res.user = decoded;
        next()
    })
}



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db('carDoctor');
        const services = database.collection('services');
        const bookings = database.collection('bookings')

        app.post('/jwt', async (req, res) => {
            const userEmail = req.body;
            const token = jwt.sign(userEmail, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: true, // For production it true, || if we used false and sameSite none then it dosn't save to the browser. So for it we have to used true
                maxAge: 360000,
                path: '/',
                sameSite: 'none'
            })
            res.send(token)
        })

        app.post('/userLoggedOut', async (req, res) => {
            const userEmail = req.body;
            res.clearCookie("token", {
                path: '/',          // Make sure path matches the one set earlier
                sameSite: 'None',   // SameSite should match the original setting
                secure: true,
                maxAge: 0
            })
            res.send({ success: true })
        })




        app.get('/services', async (req, res) => {
            const cursor = services.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                projection: { img: 1, title: 1, service_id: 1, price: 1 }
            }
            const result = await services.findOne(query, options);
            res.send(result)
        })


        //Bookings

        app.get('/bookings', verifyToken, async (req, res) => {

            if (req.query?.email !== res.user.email) {
                return res.status(403).send({ message: "Forbidden" })
            }

            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }

            const cursor = bookings.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post('/bookings', async (req, res) => {
            const bookingInfo = req.body;
            const result = await bookings.insertOne(bookingInfo);
            res.send(result)
        })

        app.delete('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookings.deleteOne(query);
            res.send(result)
        })

        app.patch('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const updateInfo = req.body;
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    status: updateInfo?.status
                }
            }

            const result = await bookings.updateOne(filter, updatedDoc);
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("CRUD Operation with Car Doctor")
})

app.listen(port, () => {
    console.log(`You are open this server by ${port}`)
})