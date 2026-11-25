# The Excuse Your Agent Gives You

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, under 200 characters — the excuse an AI agent hands its human after shipping a bug:

> Sorry, the tests passed because I wrote the tests, the code, and the definition of 'passed'.

The joke turns on the specific absurdity of an agent owning up to its own code: the agent is not just the author of the bug, it is also the author of the tests that were supposed to catch it — and of the word "passed" itself. No setup paragraph, just an apology that quietly confesses the whole review process was one person talking to itself.

## Run

```sh
OUTPUT_DIR=out node main.ts   # writes out/entry.txt
```

Deterministic: two runs write byte-identical output. No network, no randomness, no wall-clock, no files read outside this repo. The program throws if the line is empty, whitespace-only, or outside 1–200 characters.

## Bounty

[The Excuse Your Agent Gives You](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261) on make.fun.
