export default {
  async fetch(request) {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());
    const target = params.target;
    delete params.target;
    const res = await fetch("https://headedgames.base44.app/functions/" + target, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params),
    });
    return new Response(res.body, {
      status: res.status,
      headers: { "content-type": "application/json" },
    });
  }
};
