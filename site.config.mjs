// Data source switches — one place to turn sources on/off.
export default {
  sources: {
    repository: true,        // content/ in this repo (always on)
    googleDrive: false,      // GitHub Action syncs Sheets/Docs/Drive into content/ (needs GOOGLE_SERVICE_ACCOUNT)
    raidHelper: true,        // GitHub Action writes content/games/wow-forever/events.json every 30'
  },
  runtime: {
    discordCounts: true,     // live members/online from the public invite (no key)
    raidHelperLive: true,    // live sign-ups from Raid-Helper's public single-event endpoint
  },
  google: {
    // IDs = the part of the URL between /d/ and /edit
    sheets: { roster: '', loot: '', events: '' },
    docs: { regolamento: '' },
    driveFolder: '',
  },
};
