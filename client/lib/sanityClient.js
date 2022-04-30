import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0m6a2q9w',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skEyAplYCqNRSlei0fdBCySO35CyRjRVJt2A5ztUlnwsyHXSkSSPJjUtJrVTSWwTyrHkQj5h1ZFLvtyMExIIeOA2rZs4ZEdKmTRMsYo0IWQEczPrmnh9gbffuVywTMxkzpdi9JYedW8u494s0LO1LXAmyMFdySRq9oAIDDouWHxH3WvPwWtn',
  useCdn: false,
})
