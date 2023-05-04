import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GalleryContextProvider } from "~/features/home/context/GalleryContext";
import HomePage from "~/features/home/HomePage";

export const meta: V2_MetaFunction = () => [{ title: "Chasers Fresh Juice" }];

// test
export const loader: LoaderFunction = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=IGQVJVNTJMeTBwcFZA4QnhCd2VUcjFxa09TQmRUVFZAxTjk5TnpBcFBtam1QRmRvc2ZAlT2VZAQlJvcnMwNktneG5NVnZApcVpXTXo2SlhIaHdTUzB2NEFKdWpYTXJoSkItbzVaUDBtRUNPSFdZAaG5OWE1WUU5qeFZAqVi1OTEhz`
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
