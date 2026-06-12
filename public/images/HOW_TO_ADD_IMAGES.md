# How to Add CTC Images

Copy your photos into the folders below. **No code changes needed** if you use these exact filenames.

## Supported formats

`.jpg` · `.jpeg` · `.png` · `.webp` (any one per file)

## Folder checklist

### `home/` (Home page)

| File | Used for |
|------|----------|
| `hero.jpg` | Full-screen background on home |
| `overview.jpg` | Overview section photo |

### `about/` (About page)

| File | Used for |
|------|----------|
| `team.jpg` | Large team / group photo |

### `training/` (Training page + home highlights)

| File | Activity |
|------|----------|
| `drill.jpg` | Drill & Parade |
| `fitness.jpg` | Physical Fitness |
| `shooting.jpg` | Rifle Shooting |
| `mallakhamb.jpg` | Mallakhamb |
| `lathi.jpg` | Lathi-Kathi |
| `yoga.jpg` | Yoga & Meditation |
| `adventure.jpg` | Adventure Training |
| `leadership.jpg` | Leadership Training |

### `events/` (Events page)

| File | Event |
|------|-------|
| `annual.jpg` | Annual Training Program |
| `week.jpg` | CTC Week |
| `competition.jpg` | Competitions |
| `fitness-demo.jpg` | Fitness Demonstrations |
| `school.jpg` | School Collaboration |
| `awards.jpg` | Award Ceremonies |

### `gallery/` (Gallery page)

| File | Slot |
|------|------|
| `01.jpg` … `12.jpg` | Gallery grid (12 photos) |

You can rename gallery titles in `src/data/siteData.ts` → `galleryItems`.

## Tips

- **Hero image:** Use a wide landscape photo (1920×1080 or larger).
- **Compress** large photos (under ~500 KB each) for faster loading — use [squoosh.app](https://squoosh.app).
- After adding files, refresh the browser (`Ctrl+F5`). If `npm run dev` is running, changes appear immediately.

## Example

```
public/images/
  home/
    hero.jpg          ← your parade / training photo
    overview.jpg
  about/
    team.jpg
  training/
    drill.jpg
    ...
  gallery/
    01.jpg
    02.jpg
```

## More than 12 gallery photos?

Edit `galleryItems` in `src/data/siteData.ts` and add `13.jpg`, `14.jpg`, etc. under `gallery/`.
