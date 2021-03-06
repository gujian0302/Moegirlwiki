/*!
 * VisualEditor Standalone Initialization Target class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Initialization Standalone target.
 *
 *     @example
 *     new ve.init.sa.Target(
 *         $( '<div>' ).appendTo( 'body' ), ve.createDocumentFromHtml( '<p>Hello world.</p>' )
 *     );
 *
 * @class
 * @extends ve.init.Target
 *
 * @constructor
 * @param {jQuery} $container Container to render target into
 * @param {ve.dm.Document} doc Document model
 */
ve.init.sa.Target = function VeInitSaTarget( $container, doc ) {
	// Parent constructor
	ve.init.Target.call( this, $container );

	// Properties
	this.surface = new ve.ui.Surface( doc );
	this.toolbar = new ve.ui.Toolbar( this.surface, { 'shadow': true } );

	// Initialization
	this.toolbar.$.addClass( 've-init-sa-target-toolbar' );
	this.toolbar.addTools( this.constructor.static.toolbarTools );
	this.toolbar.enableFloating();
	this.$.append( this.toolbar.$, this.surface.$ );
	this.surface.addCommands( this.constructor.static.surfaceCommands );
	this.surface.initialize();
};

/* Inheritance */

ve.inheritClass( ve.init.sa.Target, ve.init.Target );
