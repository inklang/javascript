import type { Headers } from '~/headers';
import type { Response } from '~/response';

export type Request = {
  method: string,
  url: URL, // @url::url from @inklang/url
  headers: Headers
}

export function createRequest (method: string, url: URL, headers: Headers): Request {
  return {
    method,
    url,
    headers
  }
}

export async function send (request: Request): Promise<Response> {
  const response = await fetch(request.url, {
    method: request.method,
    headers: request.headers
  });

  return {
    status: response.status,
    headers: response.headers,
    bytes: new Uint8Array(await response.arrayBuffer())
  }
}
