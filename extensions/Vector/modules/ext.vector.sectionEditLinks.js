/*
 * Section Edit Links for Vector
 */
( function ( $, mw ) {

var currentExperiment, experiment, odds,
	eventBase = 'ext.vector.sectionEditLinks-bucket:',
	cookieBase = 'ext.vector.sectionEditLinks-',
	bucket = null;

if ( mw.config.get( 'wgVectorSectionEditLinksBucketTest', false ) ) {
	// If the version in the client's cookie doesn't match wgVectorSectionEditLinksExperiment, then
	// we need to disregard the bucket they may already be in to ensure accurate redistribution
	currentExperiment = $.cookie( cookieBase + 'experiment' );
	experiment = Number( mw.config.get( 'wgVectorSectionEditLinksExperiment', 0 ) );
	if ( currentExperiment === null || Number( currentExperiment ) !== experiment ) {
		$.cookie( cookieBase + 'experiment', experiment );
	} else {
		bucket = $.cookie( cookieBase + 'bucket' );
	}
	if ( bucket === null ) {
		// Percentage chance of being tracked
		odds = Math.min( 100, Math.max( 0,
			Number( mw.config.get( 'wgVectorSectionEditLinksLotteryOdds', 0 ) )
		) );
		// 0 = not tracked, 1 = tracked with old version, 2 = tracked with new version
		bucket = ( Math.random() * 100 ) < odds ? Number( Math.random() < 0.5 ) + 1 : 0;
		$.cookie( cookieBase + 'bucket', bucket, { 'path': '/', 'expires': 30 } );
		// If we are going to track this person from now on, let's also track which bucket we put
		// them into and when
		if ( bucket > 0 && 'trackAction' in $ ) {
			$.trackAction( eventBase + bucket + '@' + experiment );
		}
	}
}

if ( bucket <= 0 ) {
	return;
}

$(document).ready( function () {
	if ( bucket === '2' || bucket === 2 ) {
		// Move the link over to be next to the heading text and style it with an icon
		$( 'span.mw-headline' ).each( function () {
			$(this)
				.after(
					$( '<span class="editsection vector-editLink"></span>' )
						.append(
							$(this)
								.prev( 'span.editsection' )
								.find( 'a' )
									.each( function () {
										var text = $(this).text();
										$(this).text(
											text.substr( 0, 1 ).toUpperCase() + text.substr( 1 )
										);
									} )
									.detach()
						)
				)
				.prev( 'span.editsection' )
					.remove();
		} );
	}
} );

} )( jQuery, mediaWiki );
