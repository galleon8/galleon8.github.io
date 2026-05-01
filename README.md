# g8 blog

A minimal personal blog built with [Hugo](https://gohugo.io/) and the [Terminal theme](https://github.com/panr/hugo-theme-terminal).

## Local development

```sh
hugo server
```

## Build

```sh
hugo --gc --minify
```

## Content

- `content/about.md` is the standalone About page.
- `content/resume.md` is the standalone Resume page.
- `content/posts/` contains blog posts.
- `archetypes/posts.md` is the starter template for new posts.

Create a post with:

```sh
hugo new content posts/my-post.md
```

## Theme

The Terminal theme is tracked as a git submodule in `themes/terminal`.

After cloning this repository elsewhere, initialize submodules with:

```sh
git submodule update --init --recursive
```
