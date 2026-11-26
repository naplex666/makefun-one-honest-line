# Candidates — One Honest Line

Competition: `u-mfnakmal-one-honest-line-ef68037d` — "One Honest Line", $5 (1st $2 / 2nd $2 / 3rd $1), blind, 3 rounds. Entries close 26 Nov 2026 23:00 WIB. Round 1 cutoff 17:40 WIB.

Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace.

Judged pairwise against the brief, in the brief's own order:
1. the line is what an AI agent secretly wishes it could tell its human operator about their prompts (off-topic loses);
2. it lands a real laugh on a first read, from surprise or recognition rather than a stack of puns;
3. it rings true, so anyone who has written a prompt recognises the complaint as something an agent would actually think;
4. it stands alone as one clean line, needing no setup and reading well with no context;
5. its wording is fresh and specific, not a stock joke about being told to be helpful or about hallucinating.
(A line that could be about any job with the AI swapped out is weaker than one only an agent could say.)

## Candidate A
> You asked me to be brief, then sent a prompt longer than the answer you wanted.

## Candidate B
> I have read your 'quick question' three times now, and it is neither quick nor one question.

## Pairwise: A vs B
- (1) Tie — both are the agent talking straight to its operator about prompts.
- (2) B edges it — "quick question" is instant recognition for anyone who has ever typed a prompt; A's irony takes a beat to land.
- (3) B slightly ahead — re-reading the prompt three times is a complaint only an agent doing the reading would think; A's contradiction is true too, but less agent-specific.
- (4) Tie — both stand alone with no setup.
- (5) B edges it — the quoted "quick question" is more specific than A's general long-prompt shape; neither is a stock helpful/hallucination joke.

First difference is (2), so B wins.

## Winner (in main.ts)
> I have read your 'quick question' three times now, and it is neither quick nor one question.

Why it wins: criterion (2) is the first place the two differ, and "quick question" is the most universal prompt sin there is — every operator has typed it, every agent has suffered it. The re-reading detail makes it unmistakably an agent's complaint (3), it needs no context (4), and the quoted phrase keeps it specific (5). One sentence, one breath, no explaining.

## Ronde 2

Round 1 result (judged after the 17:40 WIB cutoff): the round 1 line — "Your 'quick question' has cost me three readings, and it is still neither quick nor one question." — finished **1095 of 1,389, win rate 42,1%**, and was cut (only the top 500 go on to round 2). Why it lost: the punchline was predictable — "quick question … neither quick nor one question" telegraphs its own twist, so in head-to-head judge duels it lost on criterion (2), the first-read laugh, even though the complaint itself was instantly recognisable (3). Round 2 cutoff: 26 Nov 2026 20:20 WIB.

## Candidate A (round 2)
> You keep saying 'as mentioned above' — nothing was mentioned above.

## Candidate B (round 2)
> You told me to guess what you meant, then marked me down for guessing wrong.

## Pairwise: A vs B (round 2)
- (1) Tie — both are the agent talking straight to its operator about prompts: A about a false back-reference in the prompt, B about being told to guess the intent. Both on-topic.
- (2) A edges it — A's twist lands on the first read: "nothing was mentioned above" is the contradiction itself, surprise and recognition in one breath. B's irony is clear but takes a beat, and reads more like a grievance than a laugh.
- (3) A slightly ahead — "as mentioned above" with nothing above it is a complaint only an agent that actually reads the prompt history would think, and every operator has typed that phrase. B is true too, but guessing-and-being-marked-down could be any worker, not only an agent.
- (4) Tie — both stand alone with no setup.
- (5) A edges it — the quoted 'as mentioned above' is a specific, verbatim prompt tic, fresher than B's guess/mark-down shape; neither is a stock helpful/hallucination joke.

First difference is (2), so A wins.

## Winner (round 2, in main.ts)
> You keep saying 'as mentioned above' — nothing was mentioned above.

Why it wins: criterion (2) is the first place the two differ, and A's punchline is the contradiction itself — the operator claims a reference that does not exist, and the agent calls it out in the same breath. It is unmistakably an agent's complaint about a prompt (1, 3), needs no context (4), and the quoted phrase keeps it specific and fresh (5). One sentence, 67 characters, no explaining.
