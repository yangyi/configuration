function FindProxyForURL(url, host) {
  if (
      shExpMatch(host, "google.com") ||
      shExpMatch(host, "*.google.com") ||
      shExpMatch(host, "twitter.com") ||
      shExpMatch(host, "*.twitter.com") ||
      shExpMatch(host, "*.blogspot.com") ||
      shExpMatch(host, "facebook.com") ||
      shExpMatch(host, "*.facebook.com") ||
      shExpMatch(host, "*.youtube.com") ||
      shExpMatch(host, "*.ytimg.com") ||
      shExpMatch(host, "*.bullogger.com") ||
      shExpMatch(host, "*.hulu.com") ||
      shExpMatch(host, "bit.ly") ||
      false
      ) {
    return "PROXY localhost:7777";
  }
  return "DIRECT";
}