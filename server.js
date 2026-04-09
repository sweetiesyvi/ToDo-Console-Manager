import express from 'express';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

let tasksCollection;

async function startServer() {
    try {
        await client.connect();
        console.log('MongoDB Atlas Connected');

        const db = client.db('todoDB');
        tasksCollection = db.collection('tasks');

        // Routes API
        app.get('/api/tasks', async (req, res) => {
            const tasks = await tasksCollection.find().toArray();
            res.json(tasks);
        });

        app.post('/api/tasks', async (req, res) => {
            const result = await tasksCollection.insertOne({ 
                title: req.body.title, 
                completed: false 
            });
            res.status(201).json(result);
        });

        app.put('/api/tasks/:id', async (req, res) => {
            const { id } = req.params;
            const result = await tasksCollection.findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $set: { completed: true } },
                { returnDocument: 'after' }
            );
            res.json(result.value);
        });

        app.delete('/api/tasks/:id', async (req, res) => {
            const { id } = req.params;
            await tasksCollection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Task deleted' });
        });

        // Frontend
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'index.html'));
        });

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error(err);
    }
}

startServer();