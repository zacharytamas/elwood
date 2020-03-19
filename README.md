# Elwood

[![GitHub][github-badge]][github]
[![Stars][]][github]
[![Travis badge](https://travis-ci.org/zacharytamas/elwood.svg?branch=master)](https://travis-ci.org/)

[github]: https://github.com/zacharytamas/elwood
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[stars]: https://badgen.net/github/stars/zacharytamas/elwood

This is an experimental project for building a system, at a high-level, for accepting arbitrary text input ("messages") and taking actions based on their structure. Messages are stored one-per-file (the file's body is the Message) in a vanilla file system directory. Elwood defines a strategy of observing these directories and the Messages contained therein and reacting to changes to the Messages, sometimes including mutating the Message.

## FAQ

### Why "Elwood"?

This project deals largely with the collection and manipulation of _information_ in the form of text Messages. [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon) is the recognized _Father of Information Theory_ and so I appropriated his middle name.
