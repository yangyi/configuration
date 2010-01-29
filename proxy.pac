function FindProxyForURL(url, host) {
  var list = [
    "google.com",
    "*.google.com",
    "*.wenxuecity.com",
    "*.rapidshare1.com",
    "*.6park.com",
    "*.thepiratebay.org",
    "*.nowtorrents.com",
    "thepiratebay.org",
    "*.twimg.com",
    "twitter.com",
    "*.twitter.com",
    "*.blogger.com",
    "*.blogspot.com",
    "www.hecaitou.net",
    "*.open-lab.com",
    "*.taragana.com",
    "*.rfa.org",
    "*.elance.com",
    "*.wordpress.com",
    "facebook.com",
    "*.facebook.com",
    "*.youtube.com",
    "*.ytimg.com",
    "*.bullogger.com",
    "*.hulu.com",
    "*.android.com",  
    "bit.ly",         
    "*.flickr.com",
    "*.images-amazon.com",
    "*.texina.net",
    "*.freelancerselite.com",
    "*.wikipedia.org",
    "twitpic.com",
    "*.jquery.com",
    "tinyurl.com",
    "afreshcup.com"
  ]
  
  var result = false;
  for (var ix=0; ix < list.length; ix++) {
    if (shExpMatch(host, list[ix])) { result = true }
  }
  return result == true ? "PROXY localhost:7777" : "DIRECT";
}

