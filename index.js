import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import serverless from 'serverless-http'; // New import

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('public'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Use a router for all your paths
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wallet Engine is Running!');
});

router.get('/balance/:email', async (req, res) => {
    const { email } = req.params;
    const { data, error } = await supabase.from('wallets').select('balance').eq('user_email', email).single();
    if (error) return res.status(400).json({ error: "Wallet not found" });
    res.json({ email, balance: data.balance });
});

router.post('/transfer', async (req, res) => {
    const { sender, receiver, amount } = req.body;
    const { error } = await supabase.rpc('transfer_money', {
        sender_mail: sender,
        receiver_mail: receiver,
        amount_to_send: amount
    });
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Success" });
});

// Important for Netlify: Wrap everything in /.netlify/functions/index
app.use('/.netlify/functions/index', router);

export const handler = serverless(app);