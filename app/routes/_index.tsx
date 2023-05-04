import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GalleryContextProvider } from "~/features/home/context/GalleryContext";
import HomePage from "~/features/home/HomePage";

export const meta: V2_MetaFunction = () => [{ title: "Chasers Fresh Juice" }];

// test
export const loader: LoaderFunction = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.IG_KEY}`
  );
  const data = await response.json();

  return { data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main>
      <GalleryContextProvider data={data.data}>
        <HomePage />
      </GalleryContextProvider>
    </main>
  );
}
