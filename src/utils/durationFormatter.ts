function formatDuration(minutes: number): string {
  if (minutes) {
    // In case a formatted string is passed in here
    if (isNaN(minutes)) {
      return `${minutes}`;
    }
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const restMins = minutes - hours * 60;
    const mins = restMins > 0 ? ` ${restMins} min` : "";
    return `${hours} hr${mins}`;
  }
  return "";
}
export default formatDuration;
