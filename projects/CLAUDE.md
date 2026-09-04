# projects/

This directory holds individual projects, each in its own subdirectory
(e.g. `projects/my-app/`, `projects/another-project/`).

## Conventions

- Each project lives in its own subdirectory under `projects/`.
- A project subdirectory should have its own `CLAUDE.md` describing that
  project's purpose, structure, and any commands specific to it (build,
  test, lint). Claude Code picks up the closest `CLAUDE.md` to the files
  it's working on, so project-specific instructions belong there, not here.
- Keep this top-level file limited to conventions that apply across all
  projects in this folder.
