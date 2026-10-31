<?php
/**
 * Plugin Name:       Gutenberg Block Starter
 * Description:       Boilerplate for a custom Gutenberg block (Call to Action) using block.json — copy it and build your own block.
 * Version:           1.0.0
 * Author:            Azan Umer
 * License:           GPL-2.0+
 * Text Domain:       gbs
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register the block from block.json. Assets are declared in block.json
 * (editorScript, style, editorStyle) and enqueued by WordPress automatically.
 */
function gbs_register_block() {
    register_block_type( __DIR__ . '/block.json' );
}
add_action( 'init', 'gbs_register_block' );
