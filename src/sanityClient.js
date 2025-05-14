// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: 'your-project-id', // Found in your Sanity project settings
//   dataset: 'production',        // Or the dataset you use
//   useCdn: true,                 // Use the CDN for faster queries
// });

// export default client;

import { createClient } from "@sanity/client";

const config = {
  projectId: "f9q195wv",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-31",
};

export const sanityClient = createClient(config);