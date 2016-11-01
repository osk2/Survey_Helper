chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({'url': 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx?auto_survey=1'});
});