# Gutenberg Block Starter

A minimal, working boilerplate for building a custom Gutenberg block — a **Call to Action** block (heading + text + button) registered via `block.json`.

## What's inside

- `block.json` — block metadata, attributes, and asset declarations (apiVersion 3)
- `src/index.js` — `edit` (RichText fields + InspectorControls for button text/URL and background colour) and static `save`
- `src/style.css` / `src/editor.css` — front-end and editor-only styles
- `wp-gutenberg-block-starter.php` — registers the block with `register_block_type( __DIR__ . '/block.json' )`
- `package.json` — `@wordpress/scripts` build setup

## Build & use

```bash
npm install
npm run build        # outputs build/index.js + build/*.css
```

Then copy the plugin folder (including `build/`) to `wp-content/plugins/` and activate it. The block appears in the inserter under **Widgets** as "Call to Action".

## Make it yours

1. Change the block name in `block.json` and `src/index.js` (keep them identical).
2. Edit the attributes in `block.json` — every attribute used in `save` must be declared there.
3. Keep `supports.html: false` so editors can't break the saved markup, or remove it if you need raw-HTML editing.

## License

MIT
