import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const secret = req.query.secret;
  if (!process.env.UNIFORM_WEBHOOK_SECRET || !secret) {
    res.status(200).json({ status: 'OK' });
    return;
  }
  if (process.env.UNIFORM_WEBHOOK_SECRET != secret) {
    res.status(500).json({ status: 'Invalid secret.' });
    return;
  }
  console.log("Publish command received.");
  const exec = require('child_process').exec;
  exec("npx uniform optimize manifest download --output ./lib/intentManifest.json", function(err, stdout, stderr) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(stdout);
    }
  });
  res.status(200).json({ status: 'OK' })
};

export default handler;
