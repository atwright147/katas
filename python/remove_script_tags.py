#!/usr/bin/env python3

import re

s = open("test.html").read()
out = re.sub(r"<(.*?)script(.*?)>(.*?)</(.*?)script(.*?)>", "", s)
print(out)