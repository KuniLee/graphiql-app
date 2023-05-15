export default function parseJson(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return undefined;
  }
}
