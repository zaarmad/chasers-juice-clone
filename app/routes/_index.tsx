import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GalleryContextProvider } from "~/features/home/context/GalleryContext";
import HomePage from "~/features/home/HomePage";

export const meta: V2_MetaFunction = () => [{ title: "Chasers Fresh Juice" }];

// test
export const loader: LoaderFunction = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=IGQVJYdGpsbG05dm1nN090amUtcGtNeG94SkdBZAEMzRVd1WlI4OGhQY1U0MWpOUGxmb0F0Mi1KTndNN1FRZA2pkU2NBY0xJQTNnaGdkcmdmbkVmc2dPMkdPdWRfb1RiNHpQZAUJtWmsxYkFyX2VCbGt3SXdyR1JLYWg4VEFr`
  );
  const data = await response.json();

  return { data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  console.log("data -->", data);
  return (
    <main>
      <GalleryContextProvider data={data.data}>
        <HomePage />
      </GalleryContextProvider>
    </main>
  );
}
