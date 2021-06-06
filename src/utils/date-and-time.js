export function getToday() {
  return new Date().toJSON().slice(0, 10);
}
