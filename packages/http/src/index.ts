type InkRequest = Request;
export type { InkRequest as Request };

type InkResponse = Response;
export type { InkResponse as Response };

type InkHeaders = Headers;
export type { InkHeaders as Headers };

export const createRequest = (method: string, url: URL, headers: Headers): Request =>
  new Request(url, {
    method,
    headers
  });

export const sendRequest = async (request: Request): Promise<Response> => fetch(request);

export const createHeaders = (): InkHeaders => new Headers();

export const readResponseBodyAsString = async (response: Response): Promise<string> =>
  response.text();

export const readResponseBodyAsBytes = async (response: Response): Promise<Uint8Array> => {
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}
