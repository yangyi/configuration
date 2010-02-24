function FindProxyForURL(url, host) {
  var list = [
    "*.nowtorrents.com",
    "*.thoughtbot.com",
    "pastie.org",
    "*.pastie.org",
    "sourceware.org",
    "*.redtube.com",
    "ff.im",
    "omgbloglol.com",
    "*.wikimedia.org",
    "*.chinagfw.org",
    "*.ggpht.com",
    "*.apple.com",
    "*.cinepedia.cn",
    "*.danwei.org",
    "*.brightcove.com",
    "*.aolcdn.com",
    "*.mysql.com",
    "*.openeclair.com",
    "*.jamievandyke.com",
    "*.github.com",
    "*.gmodules.com",
    "*.wikia.com",
    "*.feedburner.com",
    "*.twitpic.com",
    "twitgoo.com",
    "*.twitgoo.com",
    "*.openbittorrent.com",
    "*.python.org",
    "*.wii4everybody.com",
    "*.youporn.com",
    "youporn.com",
    "google.com",
    "*.gongfa.org",
    "*.google.com",
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

