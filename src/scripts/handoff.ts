/** URL length limit is deliberately conservative. Never trim the user's message. */
export function createHandoff(number: string, message: string) {
  if (!/^[1-9]\d{7,14}$/.test(number)) return null;
  const base = `https://wa.me/${number}`;
  const prepared = `${base}?text=${encodeURIComponent(message)}`;
  return {url: prepared.length > 1800 ? base : prepared, includesText: prepared.length <= 1800};
}
