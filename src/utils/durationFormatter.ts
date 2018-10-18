function formatDuration(minutes: number): string {
  let output = "";
  if (minutes) {
    // In case a formatted string is passed in here
    if (isNaN(minutes)) {
      return `${minutes}`;
    }
    if (minutes >= 1440) {
      const days = Math.floor(minutes / 1440);
      output += days > 0 ? `${days} day ` : "";
      minutes %= 1440;
    }
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      output += hours > 0 ? `${hours} hr ` : "";
      minutes %= 60;
    }
    output += minutes > 0 ? `${minutes} min` : "";
  }
  return output.trim();
}
export default formatDuration;
