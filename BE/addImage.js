const { MongoClient } = require("mongodb");
require("dotenv").config();

const imagesByCategory = {
  1: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400", // Protein
  2: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", // Vitamins
  3: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", // Equipment
  4: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",   // Food
  5: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400", // Supplements
};

async function addImages() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  console.log("Connected!");

  const db = client.db("nutritiondb");
  const products = db.collection("products");

  const all = await products.find({}).toArray();

  for (const product of all) {
    const image = imagesByCategory[product.category_id] || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400";
    await products.updateOne(
      { _id: product._id },
      { $set: { image } }
    );
    console.log(`Updated: ${product.name}`);
  }

  console.log("✅ All products updated!");
  await client.close();
}

addImages();