import env from '@/env';
import { createClient } from '@libsql/client/http';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
// You can specify any property from the libsql connection options

const client = createClient({ 
    url: env.DATABASE_URL!, 
    authToken: env.DATABASE_AUTH_TOKEN!
  });
  const db = drizzle({ client });
  export default db;