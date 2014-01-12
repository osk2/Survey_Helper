chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url': 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx'});
	chrome.tabs.onUpdated.addListener(function( tabId , info ,tab) {
		if ( info.status == "complete") {
			chrome.tabs.executeScript(null, {file: "js/content_script.js"});
		}
	});
});