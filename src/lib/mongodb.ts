import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(".env.local에 MONGODB_URI가 설정되어 있지 않습니다.");
}

// 개발 중 핫 리로드마다 연결이 새로 생기지 않도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();
if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linktree").collection<{ _id: string; count: number }>("clicks");
}
