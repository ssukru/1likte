const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined");
}

function customFetch(url: string, options: RequestInit = {}) {
  let fullUrl = "";
  if (url.startsWith(BASE_URL!)) {
    fullUrl = url;
  } else {
    fullUrl = `${BASE_URL}/${url}`;
  }

  return fetch(fullUrl, options);
}

export default customFetch;

export function createFullUrl(path: string) {
  return new URL(`${BASE_URL}/${path}`);
}
