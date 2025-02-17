const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined");
}

function customFetch(url: string, options: RequestInit = {}, locale?: string) {
  let fullUrl = "";
  if (url.startsWith(BASE_URL!)) {
    fullUrl = url;
  } else {
    fullUrl = `${BASE_URL}/${url}`;
  }

  // Create URL object to handle search params
  const urlObj = new URL(fullUrl);

  if (locale) {
    urlObj.searchParams.set("locale", locale);
  }

  return fetch(urlObj.toString(), options);
}

export default customFetch;

export function createFullUrl(path: string, locale?: string) {
  const url = new URL(`${BASE_URL}/${path}`);

  if (locale) {
    url.searchParams.set("locale", locale);
  }

  return url;
}
