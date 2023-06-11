import Image from "next/image";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../models";

export default async function Home() {
  const models = await DataStore.query(Blog);
  console.log(models);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>List of My Post</p>
      {models.map((model) => (
        <div
          key={model.id}
          className="flex flex-col items-center justify-center"
        >
          <p>{model.title}</p>
          <p>{model.content}</p>
        </div>
      ))}
    </main>
  );
}
