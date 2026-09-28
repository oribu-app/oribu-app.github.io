---
title: Troubleshooting
description: Answers to common problems with search, integrations and syncing in Oribu.
editLink: false
---

# Troubleshooting

Oribu stores your library locally and works fully offline. Search and metadata use API keys
that come built into the official releases, so they work with no setup; you only add your own
accounts to sync your personal progress. This page covers the most common problems and how to
fix them.

## I can't find any movies, series or games when I search

Official releases (from GitHub or the nightly channel) include built-in keys for movies, series
and games, so search should work right away. If it doesn't:

- Check your internet connection and try again — the built-in keys are shared by everyone, so
  a service may occasionally rate-limit requests for a few minutes.
- If you built Oribu yourself, it has no built-in keys. Add your own free keys in
  **Settings → Integrations**: a TMDB Read Access Token from
  [themoviedb.org](https://www.themoviedb.org/) for movies and series, and an IGDB Client ID and
  Client Secret from a free app on the [Twitch Developer Console](https://dev.twitch.tv/console/apps)
  for games.

You can also add your own key to any service in **Settings → Integrations** at any time — it
replaces the built-in one. Use the **Test connection** button to confirm it was accepted.

## My Steam library or achievements aren't showing

Add your SteamID64 and your Steam Web API key (get one at
[steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)) in
**Settings → Tracking → Steam**. Make sure your Steam profile and game details are set to **Public** in your Steam
privacy settings, otherwise the API has nothing to return.

## Setting up the optional integrations

These are all optional and free — Oribu works without them.

- **Settings → Integrations** holds the keys used for search and metadata. They already have
  built-in keys; add your own only to replace one (the reset button goes back to Oribu's key).
- **Settings → Tracking** holds *your* accounts, grouped by hobby (games, anime and manga, movies
  and series, books). Each one can **update automatically** with the daily refresh or only when you
  tap **Sync now** — which first saves a backup of your library if a backup folder is set
  (Settings → Data). A sync only ever moves things forward: it never lowers progress or a status,
  and never overwrites a rating or date you set.

Tap the test button on a card to confirm a key or account was accepted.

- **AniList** (reading and watching progress): enter your AniList username — your profile's lists
  need to be public.
- **RetroAchievements** (achievements for retro games): log in at
  [retroachievements.org](https://retroachievements.org/), open **Settings → Authentication**,
  copy your **Web API Key** and enter it together with your username. Achievements show up on games whose platform is NES, SNES, N64, GameCube, GBA, DS,
  PS1, PS2 or PSP and that you have already played with RetroAchievements enabled.
- **SteamGridDB** (alternative covers, via **"..." → Change cover** on a game) already works
  with the built-in key. To use your own, log in at [steamgriddb.com](https://www.steamgriddb.com/),
  open **Preferences → API** and generate a key.
- **Hardcover** (extra book search source): log in at [hardcover.app](https://hardcover.app/),
  open **Settings → API** and copy your API token (with or without the `Bearer` prefix) into the
  Hardcover field. It's only used when Google Books and Open Library find nothing.

## Why isn't PlayStation, Xbox, GOG or Epic library sync supported?

These platforms don't offer a safe way to connect an app without using your real account
login. Connecting that way would mean handing Oribu your sign-in session and could put your
account at risk of being banned. We won't add them until the platforms provide an official way
to do it. In the meantime, you can still add these games and log playtime and trophies by hand.

## How do I back up my library?

Go to **Settings → Data → Backup**. Pick a folder (for example one synced by your cloud storage
app), then tap **Back up now** and choose what to include — library items, watched episodes, book
quotes, playthroughs, movie lists, app settings and, if you want, your API keys and accounts.
Oribu saves it there as a JSON file that never leaves your device. **Automatic backup** can run
daily, every 2 days or weekly (or be left manual only), keeping up to five files.

To bring a library back (on a new phone, for example), use **Restore a backup** and pick the file:
Oribu shows what it holds before replacing anything. Covers and details are downloaded again right
after, and if the backup includes settings, the app restarts to apply them.

## An item's status or progress looks out of date

Oribu refreshes your library's cached data automatically in the background, but you can force
an immediate refresh from **Settings → Data → Update all**.

## Still stuck?

Open an issue on [GitHub](https://github.com/oribu-app/oribu/issues) describing what you
expected and what happened instead. Tapping the version number in **Settings → About** copies
useful debug info (app version, Android version, device model) that you can paste into the
issue.
