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
- **MangaDex** and **MangaBaka** - fallback manga/webtoon search and chapter counts
- **Google Books** and **Open Library** - book metadata
- **Hardcover** - if you optionally configure a Hardcover API token, as an extra fallback for
  book search
- **SteamGridDB** - community-made game covers, used when a game has no cover and when you
  pick one with "Change cover"
- **Steam** - if you optionally configure your SteamID, to read your public library, playtime
  and achievement data
- **RetroAchievements** - if you optionally configure your RetroAchievements username, to read
  your public achievement progress for retro games

These requests contain only what is needed to perform the search or lookup (e.g. a title, or an
external ID already returned by one of these services) - never your Oribu library as a whole.
Each of these third parties has its own privacy policy governing how it handles the requests it
receives; we have no control over their practices.

You can use most of Oribu's tracking features without configuring any of the optional
integrations above (AniList sync, Steam, RetroAchievements, SteamGridDB, Hardcover) - those only
activate if you provide the relevant identifier or key in Settings.

## Why some platforms aren't supported

Official releases include Oribu's own API keys for search and metadata, so these requests are
made with the app's key, not an account of yours. Your SteamID and RetroAchievements username
are only used to read the progress you already made public on those services.

Every optional integration in Oribu uses a **personal API key** that the service itself issues
for this purpose (Steam, IGDB, SteamGridDB, RetroAchievements, Hardcover). These keys are
separate from your account password, can be revoked at any time from the service's own settings,
and only grant read access to data you already chose to make available.

PlayStation Network, Xbox, GOG and Epic Games Store don't offer an official API like this. The
only way to read your library or trophies there is to sign in with your real account session
through unofficial endpoints, which means handling your login credentials and risking your
account being flagged or banned. Oribu doesn't do that, and won't add these platforms unless they
publish an official, key-based API. You can still log games, playtime and trophies from any
platform by hand.

## Crash reporting

Oribu does not currently include any crash reporting or analytics SDK. If this changes in a
future version, this page will be updated to reflect it.

## Changes to this privacy policy

We may periodically update this privacy policy. You are advised to review this page
periodically for any changes.

## Contact us

If you have any questions about this privacy policy, please [open an issue on
GitHub](https://github.com/oribu-app/oribu-app/issues).
