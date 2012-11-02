<?php

require 'twitter.php';

$twitter = new Twitter();
$tweets = $twitter->getTweets("linkinpark");
echo '<b>Tweets from LinkinPark</b>';
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo $tweet->text;
	echo '</li>';
}
echo '</ul>';

?>