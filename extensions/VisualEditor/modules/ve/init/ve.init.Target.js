/*!
 * VisualEditor Initialization Target class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Generic Initialization target.
 *
 * @class
 * @abstract
 * @mixins ve.EventEmitter
 *
 * @constructor
 * @param {jQuery} $container Conainter to render target into
 */
ve.init.Target = function VeInitTarget( $container ) {
	// Mixin constructors
	ve.EventEmitter.call( this );

	// Properties
	this.$ = $container;
};

/* Inheritance */

ve.mixinClass( ve.init.Target, ve.EventEmitter );

/* Static Properties */

ve.init.Target.static.toolbarTools = [
	{ 'items': ['undo', 'redo'] },
	{ 'items': ['format'] },
	{ 'items': ['bold', 'italic', 'link', 'clear'] },
	{ 'items': ['number', 'bullet', 'outdent', 'indent'] }
];

ve.init.Target.static.surfaceCommands = [
	'bold', 'italic', 'link', 'undo', 'redo', 'indent', 'outdent'
];
