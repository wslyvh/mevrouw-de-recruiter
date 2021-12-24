import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2'
import { randomBytes } from 'crypto'
import { config, scopes } from 'utils/cms'

export const randomString = () => randomBytes(4).toString("hex");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers
  const url = new URL(`https://${host}/${req.url}`)
  const urlParams = url.searchParams
  const provider: string = urlParams.get("provider") || ''

  const client = new AuthorizationCode(config(provider))

  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
    scope: scopes.github, // scopes[provider],
    state: randomString()
  })

  res.writeHead(301, { Location: authorizationUri })
  res.end()
}