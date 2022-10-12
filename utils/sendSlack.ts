export default async function sendSlack(text: string) {
  const fetcher = (await import("@utils/fetcher")).default

  const data = {
    body: JSON.stringify({ text }),
    method: "POST",
  }

  await fetcher(`/api/send_slack`, data)
}
