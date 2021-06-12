import {MongoClient} from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    '<mongodb_cluster_url>'
  )
  return client;
}