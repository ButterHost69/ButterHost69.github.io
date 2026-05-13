# Project Media

Place project images, videos, and other static assets in folders here, one per project.

```
public/projects/
├── adaptrunc/
│   ├── screenshot.png
│   └── demo.mp4
└── another-project/
    └── thumbnail.jpg
```

Reference them in project `index.md` frontmatter like:

```yaml
thumbnail: "/projects/adaptrunc/screenshot.png"
```

Or inline in markdown:

```markdown
![Architecture diagram](/projects/adaptrunc/arch.png)
```

> Note: Files in `public/` are served at the root path. A file at
> `public/projects/adaptrunc/screenshot.png` is accessible at
> `/projects/adaptrunc/screenshot.png`.