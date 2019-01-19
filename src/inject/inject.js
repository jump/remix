chrome.extension.sendMessage({}, function(response) {

	var interval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(interval);

			// list object to store subreddits
			var subreddits = [];

			while (document.getElementsByClassName("class of subreddit field").length > 0){
				var subreddit = document.getElementsByClassName("classname of subreddit")[0];
				if (typeof(element) != "undefined") {
					
					//add the element name to subreddits list, so we can shuffle them
					subreddit["element name"] = element.name
				}
			}

			//shuffle the subreddit data structure
			subreddit = subreddit.shuffle()

			//push changes back to frontpage
			while (document.getElementsByClassName("class of subreddit field").length > 0){
				var subreddit = document.getElementsByClassName("classname of subreddit")[0];
				if (typeof(element) != "undefined") {
					
					//for each one, change the title of the subreddit
					if subreddit.length() > 0
						element.name = subreddit[0]
						subreddit[0].delete()

				}
			}

			if (subreddits.length > 10) {
				console.log(subreddits.length + 'Greater than 10 subreddits discovered.');
			}

		}
	}, 10);
});