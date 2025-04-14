import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'mn8iiw8u',
  dataset: 'production',        // or your dataset name
  useCdn: false,                 // `true` = faster, `false` = fresh
  apiVersion: '2023-10-01',     // use today's date or latest version
})
