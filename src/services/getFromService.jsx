export async function getFromService(url, { method, headers, body }={}) {
  try {
    const req = await fetch(url, {
      method,
      headers,
      body,
    });
    if (!req.ok) return null;

    const data = await req.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
