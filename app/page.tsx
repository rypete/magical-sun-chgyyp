import { SimpleComponent } from "@/components/SimpleComponent";
import { SplitProvider } from "@/components/split/SplitProvider";

/**
 * Observe "Im on the client" displayed in the terminals below.
 *
 * Yarn dev (running now) you'll see the "Im on the client message" once (maybe more), due to hot reloading
 * Run yarn build && yarn start to build the application. Now you can observe the "client side" message every refresh.
 */

export default async function Home() {
  // Fetch some data to force SSR
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  }).then((response) => response.json());

  // You should only see this on the server
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleComponent />;
      <SplitProvider />
    </main>
  );
}
