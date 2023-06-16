import { Client } from '@elastic/elasticsearch'
import config from 'config'

interface Elastic {
  cloudID: string;
  username: string;
  password: string
}

const elasticConfig: Elastic = config.get('elastic');

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID
  },
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
})

export default client