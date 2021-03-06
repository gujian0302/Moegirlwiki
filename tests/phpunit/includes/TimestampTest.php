<?php

/**
 * Tests timestamp parsing and output.
 */
class TimestampTest extends MediaWikiLangTestCase {

	protected function setUp() {
		parent::setUp();

		RequestContext::getMain()->setLanguage( Language::factory( 'en' ) );
	}

	/**
	 * Test parsing of valid timestamps and outputing to MW format.
	 * @dataProvider provideValidTimestamps
	 */
	function testValidParse( $format, $original, $expected ) {
		$timestamp = new MWTimestamp( $original );
		$this->assertEquals( $expected, $timestamp->getTimestamp( TS_MW ) );
	}

	/**
	 * Test outputting valid timestamps to different formats.
	 * @dataProvider provideValidTimestamps
	 */
	function testValidOutput( $format, $expected, $original ) {
		$timestamp = new MWTimestamp( $original );
		$this->assertEquals( $expected, (string)$timestamp->getTimestamp( $format ) );
	}

	/**
	 * Test an invalid timestamp.
	 * @expectedException TimestampException
	 */
	function testInvalidParse() {
		new MWTimestamp( "This is not a timestamp." );
	}

	/**
	 * Test requesting an invalid output format.
	 * @expectedException TimestampException
	 */
	function testInvalidOutput() {
		$timestamp = new MWTimestamp( '1343761268' );
		$timestamp->getTimestamp( 98 );
	}

	/**
	 * Returns a list of valid timestamps in the format:
	 * array( type, timestamp_of_type, timestamp_in_MW )
	 */
	public static function provideValidTimestamps() {
		return array(
			// Various formats
			array( TS_UNIX, '1343761268', '20120731190108' ),
			array( TS_MW, '20120731190108', '20120731190108' ),
			array( TS_DB, '2012-07-31 19:01:08', '20120731190108' ),
			array( TS_ISO_8601, '2012-07-31T19:01:08Z', '20120731190108' ),
			array( TS_ISO_8601_BASIC, '20120731T190108Z', '20120731190108' ),
			array( TS_EXIF, '2012:07:31 19:01:08', '20120731190108' ),
			array( TS_RFC2822, 'Tue, 31 Jul 2012 19:01:08 GMT', '20120731190108' ),
			array( TS_ORACLE, '31-07-2012 19:01:08.000000', '20120731190108' ),
			array( TS_POSTGRES, '2012-07-31 19:01:08 GMT', '20120731190108' ),
			// Some extremes and weird values
			array( TS_ISO_8601, '9999-12-31T23:59:59Z', '99991231235959' ),
			array( TS_UNIX, '-62135596801', '00001231235959' )
		);
	}

	/**
	 * @test
	 * @dataProvider provideHumanTimestampTests
	 */
	public function testHumanTimestamp(
		$tsTime, // The timestamp to format
		$currentTime, // The time to consider "now"
		$timeCorrection, // The time offset to use
		$dateFormat, // The date preference to use
		$expectedOutput, // The expected output
		$desc // Description
	) {
		$user = $this->getMock( 'User' );
		$user->expects( $this->any() )
			->method( 'getOption' )
			->with( 'timecorrection' )
			->will( $this->returnValue( $timeCorrection ) );

		$user->expects( $this->any() )
			->method( 'getDatePreference' )
			->will( $this->returnValue( $dateFormat ) );

		$tsTime = new MWTimestamp( $tsTime );
		$currentTime = new MWTimestamp( $currentTime );

		$this->assertEquals(
			$expectedOutput,
			$tsTime->getHumanTimestamp( $currentTime, $user ),
			$desc
		);
	}

	public static function provideHumanTimestampTests() {
		return array(
			array(
				'20111231170000',
				'20120101000000',
				'Offset|0',
				'mdy',
				'Yesterday at 17:00',
				'"Yesterday" across years',
			),
			array(
				'20120717190900',
				'20120717190929',
				'Offset|0',
				'mdy',
				'just now',
				'"Just now"',
			),
			array(
				'20120717190900',
				'20120717191530',
				'Offset|0',
				'mdy',
				'6 minutes ago',
				'X minutes ago',
			),
			array(
				'20121006173100',
				'20121006173200',
				'Offset|0',
				'mdy',
				'1 minute ago',
				'"1 minute ago"',
			),
			array(
				'20120617190900',
				'20120717190900',
				'Offset|0',
				'mdy',
				'June 17',
				'Another month'
			),
			array(
				'19910130151500',
				'20120716193700',
				'Offset|0',
				'mdy',
				'15:15, January 30, 1991',
				'Different year',
			),
			array(
				'20120101050000',
				'20120101080000',
				'Offset|-360',
				'mdy',
				'Yesterday at 23:00',
				'"Yesterday" across years with time correction',
			),
			array(
				'20120714184300',
				'20120716184300',
				'Offset|-420',
				'mdy',
				'Saturday at 11:43',
				'Recent weekday with time correction',
			),
			array(
				'20120714184300',
				'20120715040000',
				'Offset|-420',
				'mdy',
				'11:43',
				'Today at another time with time correction',
			),
			array(
				'20120617190900',
				'20120717190900',
				'Offset|0',
				'dmy',
				'17 June',
				'Another month with dmy'
			),
			array(
				'20120617190900',
				'20120717190900',
				'Offset|0',
				'ISO 8601',
				'06-17',
				'Another month with ISO-8601'
			),
			array(
				'19910130151500',
				'20120716193700',
				'Offset|0',
				'ISO 8601',
				'1991-01-30T15:15:00',
				'Different year with ISO-8601',
			),
		);
	}
}
