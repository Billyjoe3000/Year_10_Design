from twisted.protocols import basic

from twisted.internet import protocol, reactor

class HttpEchoProtocol(basic.LineReceiver):
	def __init__(self):
		self.lines = []
		self.gotRequest = False

	