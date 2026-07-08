const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vvdatabase:vvdatabase@vidya-vridhi.rgcje8v.mongodb.net/?appName=vidya-vridhi";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('test');
    const collegesCol = db.collection('colleges');
    
    console.log("=== ONE STUDY ABROAD COLLEGE ===");
    const sa = await collegesCol.findOne({ college_type: 'study_abroad' });
    console.log(JSON.stringify(sa, null, 2));

    console.log("\n=== ONE MBBS ABROAD COLLEGE ===");
    const mbbs = await collegesCol.findOne({ college_type: 'mbbs_abroad' });
    console.log(JSON.stringify(mbbs, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
