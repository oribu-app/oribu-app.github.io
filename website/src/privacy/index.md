---
title: Privacy policy
description: Privacy policy explaining what data Oribu accesses and how it is used.
editLink: false
---

# Privacy policy

Oribu is an open-source app provided at no cost. This page explains what data the app touches
and why.

## No account, no server of ours

Oribu does not require an account and has no backend server. Your library (the items you add,
their status, ratings, notes, progress, etc.) is stored **only on your device**, in a local
database. We do not collect, receive, or have access to this data.

## Third-party APIs used for search and metadata

To let you search for and display information about games, manga, webtoons, series, movies and
books, Oribu sends search queries and identifiers to the following third-party services, only
when you actively search for or view an item:

- **TMDB** - movie and series metadata
- **IGDB** (via Twitch) - game metadata
- **HowLongToBeat** - game completion time estimates
- **IsThereAnyDeal** - game price/deal information
- **AniList** - manga/webtoon metadata and, if you optionally configure your AniList username,
  reading-progress sync from your public AniList list
- **MangaDex** - fallback manga/webtoon search and chapter counts
- **Google Books** and **Open Library** - book metadata
- **Steam** and **PSN** - if you optionally configure your Steam/PSN identifiers, to read your
  public library, playtime and trophy/achievement data

These requests contain only what is needed to perform the search or lookup (e.g. a title, or an
external ID already returned by one of these services) - never your Oribu library as a whole.
Each of these third parties has its own privacy policy governing how it handles the requests it
receives; we have no control over their practices.

You can use most of Oribu's tracking features without configuring any of the optional
integrations above (AniList sync, Steam, PSN) - those only activate if you provide the relevant
identifier in Settings.

## Crash reporting

Oribu does not currently include any crash reporting or analytics SDK. If this changes in a
future version, this page will be updated to reflect it.

## Changes to this privacy policy

We may periodically update this privacy policy. You are advised to review this page
periodically for any changes.

## Contact us

If you have any questions about this privacy policy, please [open an issue on
GitHub](https://github.com/oribu-app/oribu-app/issues).
