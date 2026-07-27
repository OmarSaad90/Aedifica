Drop the client's animated logo clips here, using these exact filenames.
The navbar tries the matching video first (autoplay, muted, loop); anything
missing just falls back to the current static PNG logo, so you can drop
these in one at a time and nothing breaks.

  logo-general.mp4    -> home page / any route with no specific match
  logo-explore.mp4    -> /programs/explore
  logo-pathway.mp4    -> /programs/pathway
  logo-launch.mp4     -> /programs/launch
  logo-rebuild.mp4    -> /programs/rebuild
  logo-talent.mp4     -> /programs/talent-pipeline

Notes:
- The navbar slot is small (36px tall), so keep the source video reasonably
  tight around the mark, similar crop to the existing PNGs.
- If a clip has a white background (like the PNGs), it should blend the
  same way automatically (mix-blend-mode: multiply).
- If a clip looks the wrong size once dropped in, tell Claude which one and
  by how much (bigger/smaller) and it'll add a scale adjustment, same as the
  PNGs already have in Navbar.tsx (LOGO_SCALE).
- Format: .mp4 (H.264) is what's wired up. If the client's files are a
  different format (.mov, .webm, animated .gif, etc.) drop them in anyway
  and flag it, the <source> tag just needs a matching type swapped in.
