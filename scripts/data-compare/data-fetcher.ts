const REALGM_URL = 'https://basketball.realgm.com/nba/draft/future_drafts/team';
const USER_AGENT = 'Mozilla/5.0 (compatible; NBA Draft Tracker/1.0)';

export async function downloadLatestData(): Promise<string> {
  const response = await fetch(REALGM_URL, {
    headers: { 'User-Agent': USER_AGENT },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.text();
}
