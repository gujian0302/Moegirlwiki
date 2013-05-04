/*!
 * VisualEditor ContentEditable TextStyleAnnotation class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * ContentEditable text style annotation.
 *
 * @class
 * @extends ve.ce.Annotation
 * @constructor
 * @param {ve.dm.TextStyleAnnotation} model Model to observe
 * @param {jQuery} $element jQuery element (required!)
 */
ve.ce.TextStyleAnnotation = function VeCeTextStyleAnnotation( model, $element ) {
	// Parent constructor
	ve.ce.Annotation.call( this, model, $element );

	// DOM changes
	this.$.addClass( 've-ce-TextStyleAnnotation' );
};

/* Inheritance */

ve.inheritClass( ve.ce.TextStyleAnnotation, ve.ce.Annotation );

/* Static Properties */

ve.ce.TextStyleAnnotation.static.name = 'textStyle';

/* Registration */

ve.ce.annotationFactory.register( ve.ce.TextStyleAnnotation );

/* Concrete Subclasses */

/**
 * ContentEditable bold annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleBoldAnnotation} model
 */
ve.ce.TextStyleBoldAnnotation = function VeCeTextStyleBoldAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<b>' ) );
	this.$.addClass( 've-ce-TextStyleBoldAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleBoldAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleBoldAnnotation.static.name = 'textStyle/bold';
ve.ce.annotationFactory.register( ve.ce.TextStyleBoldAnnotation );

/**
 * ContentEditable italic annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleItalicAnnotation} model
 */
ve.ce.TextStyleItalicAnnotation = function VeCeTextStyleItalicAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<i>' ) );
	this.$.addClass( 've-ce-TextStyleItalicAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleItalicAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleItalicAnnotation.static.name = 'textStyle/italic';
ve.ce.annotationFactory.register( ve.ce.TextStyleItalicAnnotation );

/**
 * ContentEditable underline annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleUnderlineAnnotation} model
 */
ve.ce.TextStyleUnderlineAnnotation = function VeCeTextStyleUnderlineAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<u>' ) );
	this.$.addClass( 've-ce-TextStyleUnderlineAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleUnderlineAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleUnderlineAnnotation.static.name = 'textStyle/underline';
ve.ce.annotationFactory.register( ve.ce.TextStyleUnderlineAnnotation );

/**
 * ContentEditable strike annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleStrikeAnnotation} model
 */
ve.ce.TextStyleStrikeAnnotation = function VeCeTextStyleStrikeAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<s>' ) );
	this.$.addClass( 've-ce-TextStyleStrikeAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleStrikeAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleStrikeAnnotation.static.name = 'textStyle/strike';
ve.ce.annotationFactory.register( ve.ce.TextStyleStrikeAnnotation );

/**
 * ContentEditable small annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleSmallAnnotation} model
 */
ve.ce.TextStyleSmallAnnotation = function VeCeTextStyleSmallAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<small>' ) );
	this.$.addClass( 've-ce-TextStyleSmallAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleSmallAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleSmallAnnotation.static.name = 'textStyle/small';
ve.ce.annotationFactory.register( ve.ce.TextStyleSmallAnnotation );

/**
 * ContentEditable big annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleBigAnnotation} model
 */
ve.ce.TextStyleBigAnnotation = function VeCeTextStyleBigAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<big>' ) );
	this.$.addClass( 've-ce-TextStyleBigAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleBigAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleBigAnnotation.static.name = 'textStyle/big';
ve.ce.annotationFactory.register( ve.ce.TextStyleBigAnnotation );

/**
 * ContentEditable span annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleSpanAnnotation} model
 */
ve.ce.TextStyleSpanAnnotation = function VeCeTextStyleSpanAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<span>' ) );
	this.$.addClass( 've-ce-TextStyleSpanAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleSpanAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleSpanAnnotation.static.name = 'textStyle/span';
ve.ce.annotationFactory.register( ve.ce.TextStyleSpanAnnotation );

/**
 * ContentEditable strong annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleStrongAnnotation} model
 */
ve.ce.TextStyleStrongAnnotation = function VeCeTextStyleStrongAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<strong>' ) );
	this.$.addClass( 've-ce-TextStyleStrongAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleStrongAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleStrongAnnotation.static.name = 'textStyle/strong';
ve.ce.annotationFactory.register( ve.ce.TextStyleStrongAnnotation );

/**
 * ContentEditable emphasize annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleEmphasizeAnnotation} model
 */
ve.ce.TextStyleEmphasizeAnnotation = function VeCeTextStyleEmphasizeAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<em>' ) );
	this.$.addClass( 've-ce-TextStyleEmphasizeAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleEmphasizeAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleEmphasizeAnnotation.static.name = 'textStyle/emphasize';
ve.ce.annotationFactory.register( ve.ce.TextStyleEmphasizeAnnotation );

/**
 * ContentEditable superScript annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleSuperScriptAnnotation} model
 */
ve.ce.TextStyleSuperScriptAnnotation = function VeCeTextStyleSuperScriptAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<sup>' ) );
	this.$.addClass( 've-ce-TextStyleSuperScriptAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleSuperScriptAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleSuperScriptAnnotation.static.name = 'textStyle/superScript';
ve.ce.annotationFactory.register( ve.ce.TextStyleSuperScriptAnnotation );

/**
 * ContentEditable subScript annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.TextStyleSubScriptAnnotation} model
 */
ve.ce.TextStyleSubScriptAnnotation = function VeCeTextStyleSubScriptAnnotation( model ) {
	ve.ce.TextStyleAnnotation.call( this, model, $( '<sub>' ) );
	this.$.addClass( 've-ce-TextStyleSubScriptAnnotation' );
};
ve.inheritClass( ve.ce.TextStyleSubScriptAnnotation, ve.ce.TextStyleAnnotation );
ve.ce.TextStyleSubScriptAnnotation.static.name = 'textStyle/subScript';
ve.ce.annotationFactory.register( ve.ce.TextStyleSubScriptAnnotation );
