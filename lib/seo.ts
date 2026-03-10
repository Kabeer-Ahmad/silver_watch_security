export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.silverwatchsecurity.co.uk";

export const defaultKeywords = [
  "security services UK",
  "security guards UK",
  "manned guarding",
  "mobile patrols",
  "alarm response",
  "key holding",
  "SIA licensed security",
  "event security",
  "retail security",
  "corporate security",
  "Silver Watch Security",
];

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
