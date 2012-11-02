<?php

class Twitter {
	static function getTweets($user) {
		$url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=$user";
		$jsonString = file_get_contents($url);
		$arrayOfTweets = json_decode($jsonString);
		return $arrayOfTweets;
	}
}