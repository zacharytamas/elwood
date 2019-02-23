# Elwood

This is an experimental project for building a system, at a high-level, for accepting arbitrary text input ("messages") and taking actions based on their structure. Messages are stored one-per-file (the file's body is the Message) in a vanilla file system directory. Elwood defines a strategy of observing these directories and the Messages contained therein and reacting to changes to the Messages, sometimes including mutating the Message.
