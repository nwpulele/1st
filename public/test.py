#!/usr/bin/env python
# -*- coding: utf-8 -*-

t = ("a","b",["c","d"])
t[2][0] = "e"
t[2][1] = "f"

d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print d.get("Michael")
