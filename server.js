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
let usersCollection;

async function startServer() {
  try {
    await client.connect();
    console.log('MongoDB Atlas Connected');

    const db = client.db('todoDB');
    tasksCollection = db.collection('tasks');
    usersCollection = db.collection('users');

    // ===================== USERS =====================
    app.get('/api/users', async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.json(users);
    });

    app.post('/api/users', async (req, res) => {
      const name = req.body.name;
      if (!name) return res.status(400).json({ message: 'Name required' });

      // Mini image/avatar aléatoire
      const avatars = [
        '🐱', '🐶', '🐰', '🦊', '🦁', '🐼', '🐸', '🐵', '🐧', '🐥'
      ];
      const avatar = avatars[Math.floor(Math.random() * avatars.length)];

      const result = await usersCollection.insertOne({ name, avatar });
      res.status(201).json(result);
    });

    // ===================== TASKS =====================
    app.get('/api/tasks/:userId', async (req, res) => {
      const { userId } = req.params;
      const tasks = await tasksCollection.find({ userId }).toArray();
      res.json(tasks);
    });

    app.post('/api/tasks', async (req, res) => {
      const { title, userId } = req.body;
      if (!title || !userId) return res.status(400).json({ message: 'Title and userId required' });

      const result = await tasksCollection.insertOne({ title, completed: false, userId });
      res.status(201).json({ message: 'Task added', task: result });
    });

    /*app.put('/api/tasks/:id', async (req, res) => {
      /*const { id } = req.params;
      const result = await tasksCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { completed: true } },
        { returnDocument: 'after' }
      );*/
      /*res.json({ message: 'Task marked as completed', task: result.value });
        const { title } = req.body;
        let updateData = {};
        if (title) {
          updateData.title = title;
        } else {
          updateData.completed = true;
        }
        await Task.findByIdAndUpdate(req.params.id, updateData);
        res.json({ message: 'Task updated successfully' }); });*/
    app.put('/api/tasks/:id', async (req, res) => {
      const { id } = req.params;
      const { title } = req.body;
      let updateData = {};
      if (title) {
        updateData.title = title;
      } else {
        updateData.completed = true;
      }
      await tasksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      res.json({ message: 'Task updated successfully' });
      });

    app.delete('/api/tasks/:id', async (req, res) => {
      const { id } = req.params;
      await tasksCollection.deleteOne({ _id: new ObjectId(id) });
      res.json({ message: 'Task deleted' });
    });

    // ===================== FRONTEND =====================
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'users.html'));
    });

    app.get('/tasks/:userId', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'tasks.html'));
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (err) {
    console.error(err);
  }
}

startServer();
