[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/diablosan19/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/diablosan19/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# Thursday 26 November 2026: 34 stories, 10 regions

A one-page newspaper front page that sums up the world news of Thursday,
26 November 2026. Every story on the page was first reported on 26 November
2026, dated by its first wire report in UTC. Claims are labelled CLAIM,
official releases OFFICIAL, and nothing unverified is stated as fact.

## The stories it carries

Leads: Kyiv says five jets were hit at Russia's Savasleyka airbase (3 MiG-31,
2 Su-34); the Houthis say they hit Saudi Arabia's Ras Tanura refinery as Brent
tops $94; Kim Jong Un orders tactical nuclear weapons deployed more widely.

Then, in brief: Puerto Rico's court voids the Luma power deal 5-4; an ISIL
suicide blast kills 2 in Hasakah; Zambia bans a march on the term-limit vote;
a blast hits Sanaa as the coalition intercepts missiles and drones; the Bank
of Korea lifts its rate to 3.25%; SpaceX is cleared for up to 1 million
satellites; the 100th Macy's parade moves to Saturday; judges urge the
Netanyahu bribery case be dropped; a court strikes down the Phala Phala
report; Sudan rejects Ethiopia's dialogue offer; a Karachi block collapse
kills 3 and hurts 14; Duran Duran guitarist Andy Taylor dies at 65; a second
judge blocks the birthright citizenship order; a Kenyan cult leader is
convicted again; dozens of states tell Russia to stop alleged riot-gas use;
the US unveils F-15EX fighters at Kadena; Amnesty urges an ICC probe on Gaza
births; Lebanon will open a second airport next month; Trump proposes fresh
tariffs on the EU and China; Nigeria seizes $220M of meth; Russia hits
Ukraine sites with cluster arms; a Ukrainian laser downs a Russian drone for
the first time; Hasina sets 16 December as her return date; Lukashenko offers
Zelensky a ride to Moscow and Zelensky declines; Merz warns Russia is
escalating across Europe; France backs Ukraine's strikes on Russia; the
Houthis threaten Jeddah and Red Sea ports; Israeli forces are active in south
Syria; the coalition says Houthi fire hit a Riyadh building; the EU calls the
Gaza situation "extremely critical"; and a leak puts Russian war dead near
500,000 (single source, labelled CLAIM).

## Layout notes

- Masthead names the day in full: Thursday, 26 November 2026.
- Three lead stories with drawn icon-scenes (jet, refinery, atom) — no
  photographs, no photorealistic imagery passed off as news photography.
- A UTC timeline strip runs 00:00 to 23:00 across the day's turning points.
- 31 further stories in a four-column grid, each with a region tag, a field
  tag, a UTC time and a sourcing label (OFFICIAL / CONFIRMED / REPORTED /
  CLAIM). A dotted world pin map beside the masthead marks the 10 regions
  carried; the markets strip at the foot carries Brent, WTI, the Bank of
  Korea rate, the rupee and the 29 November OPEC+ meeting.
- A red DATE CHECK box lists the big stories first reported on 25 November
  (UTC) or earlier that were deliberately excluded: the Strait of Hormuz
  tanker mine strikes, the COP31 collapse, the Huawei convictions, the
  Shenzhou-24 docking, the Cartagena hostages, the Fed Beige Book, the
  Microsoft Outlook outage, the Hamas security chief killing, the RSF drone
  strikes in Sudan, the Taiwan share fall, the Kospi sell-off, and the Cairo
  fuel-tanker fire.
- Type is large and high-contrast so the page stays legible at about 300 px
  wide. No word is truncated mid-word anywhere on the page.

## How it runs

The entry is a single 1024x1024 PNG, `entry.png`, drawn by
`build-newsimage-20261126.py` (kept outside this repo) with the Python
standard imaging library. `main.ts` (Node 22, standard library only, no
network) copies `entry.png` to the output directory
(`$MAKEFUN_OUTPUT_DIR`, or `/output` by default), checks the file starts with
a PNG or JPEG signature, and prints a one-line confirmation with the byte
count. It exits non-zero if the image is missing or is not an image. Two runs
write identical bytes.

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=6k9kp9d0&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
