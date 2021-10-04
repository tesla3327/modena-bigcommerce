require('dotenv').config();
const isSsr = process.env.NEXT_USE_SSR == 1;
process.exit(isSsr ? 1 : 0);
