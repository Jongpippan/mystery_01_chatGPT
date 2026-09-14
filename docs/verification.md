# Implementation verification — 2026-09-14

This record separates mechanical checks from visual and independent-play evidence.

## Mechanically verified

Commands run against the final local payload:

```bash
node --check src/game.js
python -m py_compile tools/build-content.py
node tools/verify.mjs
node tools/simulate.mjs
```

`tools/verify.mjs` passed with:

```text
revision: r03
main scenes: 106
optional scenes: 18
evidence: 52
people: 10
hint bundles: 42
challenges: 36
named error routes: 71
correct claim routes: 38
persistent choices: 5
schematic routes: 8
local verifier pack parts: 37 (unsplit local verification layout)
```

The verifier additionally checks the accepted-opening SHA-256, E01–E52 reachability, D01–D30 and Q01–Q06 presence, unique scene IDs, two valid Q01 proof routes, two valid D30 presentation orders, persistent branch extraction, and the PR12 local response.

`tools/simulate.mjs` completed a full default source-data path with:

```text
main scenes visited: 106
completed challenges: 36
acquired evidence: 52
played dialogue IDs: 1177
ending reached: yes
```

The simulated persistent branch state was:

```text
B_PR_01 = help_queue
B_PR_02 = environment_first
B_PLAYBACK_RESPONSE = accept_apology
B_EXHIBIT = attributed_accounts
B_SOUND = environment_only
```

The deploy data layout was separately reconstructed from 51 script pieces and matched the complete packed base64 payload byte-for-byte. The decompressed JSON SHA-256 is `259f56f4fb455cd35a80d917cace8074a0c1bf791974b9566fff603e4d52b8d5`.

The deploy runtime uses 6 safe script pieces. Their joined gzip payload decompresses byte-for-byte to the checked `src/game.js`; SHA-256 is `7abec60dd0ae7a54a76317d27f3bb726c2459db33406cd64311cc9dee8ef00a3`.

## Implemented but not independently validated here

- scene-first responsive UI
- modal evidence/people/map/dialogue/notes/settings/deduction tools
- focus/keyboard/touch behavior in an actual end-user browser
- small-screen cropping and large-text behavior
- visual readability of every generated scene/portrait/evidence SVG
- subjective clarity, pacing, difficulty, humor, and character memorability

An attempt to run the local build in the available managed Chromium environment was blocked by administrator navigation policy for local/file/data pages. That is an environment limitation, not evidence that browser rendering passed or failed. Therefore rendered visual QA is recorded as **unverified** in this environment rather than inferred from source inspection.

## Independent first play

G4-style independent first play is **unverified**. No unfamiliar human player has yet supplied timing, hypothesis, error/recovery, hint-use, character-memory, or confusion observations. Automated simulation is not counted as independent play evidence.


## Remote release verification

The repository includes `.github/workflows/verify-build.yml`. On the `release-candidate` and `main` branches it reconstructs the packed screenplay and runtime, checks both SHA-256 values, parses the r03 JSON, checks key content counts, compiles the decompressed runtime with `vm.Script`, and verifies that `index.html` references the final safe payload files.
