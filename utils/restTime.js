export function getRestTimeString(min = 0, sec = 0) {
  const minutes = pad(min);
  const seconds = pad(sec);
  return minutes + ':' + seconds;
}

function pad(num) {
  num = num.toString();
  while (num.length < 2) num = "0" + num;
  return num;
}
