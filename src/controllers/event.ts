import client from '../elastic'

export default async function getEventsAndParticipants(req: any, res: any) {
  try {

    console.log(req.body.searchWords)

    const searchInput = req.body.searchWords

    const results = await client.search({
      index: 'stubhub',
      body: {
        "query": {
          "bool": {
            "should": [
              {
                "bool": {
                  "should": [
                    {
                      "regexp": {
                        "name": `${searchInput}.*`
                      }
                    },
                    {
                      "regexp": {
                        "event_name": `${searchInput}.*`
                      }
                    }
                  ],
                  "boost": 2
                }
              },
              {
                "multi_match": {
                  "query": searchInput,
                  "fuzziness": "AUTO",
                  "fields": ["event_name", "name"]
                }
              }
            ]
          }
        }
      }
    })

    console.log(results.hits.hits)

    const eventsAndParticipants = results.hits.hits.map((eventOrParticipant: any) => {
      const {
        name,
        event_name,
        participant_id,
        event_id,
        type
      } = eventOrParticipant._source;

      return {
        name: event_name || name,
        id: participant_id || event_id,
        type
      }
    })

    return res.send(eventsAndParticipants)

  } catch (err) {
    if (err) {
      console.log(err)
      return res.json(err)
    }
  }
}