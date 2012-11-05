<?php

require 'twitter.php';

$tweets = Twitter::getTweets("linkinpark");
echo '<b>Tweets from LinkinPark</b>';
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo $tweet->text;
	echo '</li>';
}
echo '</ul>';

?>