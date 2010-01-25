function FindProxyForURL(url, host) {
  var list = [
    "google.com",
    "*.google.com",
    "twitter.com",
    "*.twitter.com",
    "*.blogger.com",
    "*.blogspot.com",
    "www.hecaitou.net",
    "facebook.com",
    "*.facebook.com",
    "*.youtube.com",
    "*.ytimg.com",
    "*.bullogger.com",
    "*.hulu.com",
    "*.android.com",  
    "bit.ly",         
    "*.flickr.com",
    "*.wikipedia.org",
    "twitpic.com",
    "afreshcup.com"
  ]
  
  var result = false;
  for (var ix=0; ix < list.length; ix++) {
    if (shExpMatch(host, list[ix])) { result = true }
  }
  return result == true ? "PROXY localhost:7777" : "DIRECT";
}

