import client from '../elastic'

export default async function getEventsAndParticipants(req: any, res: any) {
  try {
    console.log(req.body.searchWords)

    const searchInput = req.body.searchWords

    const something = await client.search({
      index: 'stubhub',
      body: {
        query: {
          "multi_match": {
            "query": searchInput,
            "fields": ['event_name', 'name']
          }
        }
      }
    })

    console.log(something.hits.hits)

    return res.send(something.hits.hits)

  } catch (err) {
    if (err) {
      console.log(err)
      return res.json(err)
    }
  }
}