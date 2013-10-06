<?php
$td = wfTempDir();
$oldtextFile = fopen( $oldtextName = tempnam( $td, 'merge-old-' ), 'w' );
$newtextFile = fopen( $newtextName = tempnam( $td, 'merge-your-' ), 'w' );

fwrite( $oldtextFile, $before );
fclose( $oldtextFile );
fwrite( $newtextFile, $after );
fclose( $newtextFile );

// Get the diff of the two files
$cmd = "$wgDiff " . $params . ' ' . wfEscapeShellArg( $oldtextName, $newtextName );

$h = popen( $cmd, 'r' );

$diff = '';

do {
        $data = fread( $h, 8192 );
        if ( strlen( $data ) == 0 ) {
                break;
        }
        $diff .= $data;
} while ( true );
