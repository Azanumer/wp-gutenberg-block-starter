/**
 * Call to Action block — edit component and static save output.
 *
 * Build with: npm install && npm run build
 * (uses @wordpress/scripts, which bundles this file to build/index.js)
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.css';
import './style.css';

registerBlockType('gbs/call-to-action', {
    edit({ attributes, setAttributes }) {
        const { heading, text, buttonText, buttonUrl, backgroundColor } = attributes;
        const blockProps = useBlockProps({ style: { backgroundColor } });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Button settings', 'gbs')}>
                        <TextControl
                            label={__('Button text', 'gbs')}
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                        />
                        <TextControl
                            label={__('Button URL', 'gbs')}
                            value={buttonUrl}
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                            help={__('Leave empty to hide the button.', 'gbs')}
                        />
                    </PanelBody>
                    <PanelBody title={__('Appearance', 'gbs')}>
                        <ColorPalette
                            value={backgroundColor}
                            onChange={(value) => setAttributes({ backgroundColor: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <RichText
                        tagName="h3"
                        value={heading}
                        onChange={(value) => setAttributes({ heading: value })}
                        placeholder={__('Write a heading…', 'gbs')}
                    />
                    <RichText
                        tagName="p"
                        value={text}
                        onChange={(value) => setAttributes({ text: value })}
                        placeholder={__('Write supporting text…', 'gbs')}
                    />
                    {buttonUrl && (
                        <a className="gbs-cta-button" href={buttonUrl}>
                            {buttonText}
                        </a>
                    )}
                </div>
            </>
        );
    },

    save({ attributes }) {
        const { heading, text, buttonText, buttonUrl, backgroundColor } = attributes;
        const blockProps = useBlockProps.save({ style: { backgroundColor } });

        return (
            <div {...blockProps}>
                <RichText.Content tagName="h3" value={heading} />
                <RichText.Content tagName="p" value={text} />
                {buttonUrl && (
                    <a className="gbs-cta-button" href={buttonUrl}>
                        {buttonText}
                    </a>
                )}
            </div>
        );
    },
});
