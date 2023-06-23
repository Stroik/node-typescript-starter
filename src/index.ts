import 'dotenv/config';
import { server } from './server';

const PORT = process.env.PORT || 8000;
const API_URL = process.env.API_URL || 'http://127.0.0.1';

server.listen(PORT, () => {
  console.log(`API is running on ${API_URL}:${PORT}`);
});
