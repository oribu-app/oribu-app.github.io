---
title: Troubleshooting
description: Answers to common problems with search, integrations and syncing in Oribu.
editLink: false
---

# Troubleshooting

Oribu stores your library locally and works fully offline, but search and syncing with
external services rely on a few free API keys that the app does not ship with.
This page covers the most common problems and how to fix them.

## I can't find any movies, series or games when I search

Manga/webtoon search (AniList) and book search (Google Books) already work with no setup.
Movies, series and games need your own free key, added in **Settings → Integrations**:

- **Movies and series** need a TMDB Read Access Token. Create a free account at
  [themoviedb.org](https://www.themoviedb.org/), request an API key from your account
  settings, and paste the token into the TMDB field.
- **Games** need an IGDB Client ID and Client Secret, created from a free app on the
  [Twitch Developer Console](https://dev.twitch.tv/console/apps).

After saving a key, use the **Test connection** button on that service's card to confirm it
was accepted before searching again.

## My Steam library or achievements aren't showing

Add your Steam Web API key and SteamID64 in **Settings → Integrations → Steam**. Make sure
your Steam profile and game details are set to **Public** in your Steam privacy settings,
otherwise the API has nothing to return.

## An item's status or progress looks out of date

Oribu refreshes your library's cached data automatically in the background, but you can force
an immediate refresh from **Settings → Data → Update all**.

## Still stuck?

Open an issue on [GitHub](https://github.com/oribu-app/oribu-app/issues) describing what you
expected and what happened instead. Tapping the version number in **Settings → About** copies
useful debug info (app version, Android version, device model) that you can paste into the
issue.
