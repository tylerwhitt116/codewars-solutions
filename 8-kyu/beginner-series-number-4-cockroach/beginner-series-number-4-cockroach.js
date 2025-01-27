function cockroachSpeed(s) {
  const cmPerSecond = (s * 100000) / 3600; // Convert km/h to cm/s
  return Math.floor(cmPerSecond); // Round down to the nearest integer
}