switch (window.location.hostname) {
	case 'identity.stust.edu.tw':
		alert('請先登入您的南台帳戶');
		break;

	case 'eportal.stust.edu.tw':
		switch (window.location.pathname.replace(/^.*\/([^/]*)/, "$1")) {
			case 'MainPage.aspx':
				//login page
				document.location.href = 'Stud_Feedback.aspx';
				break;

			case 'Stud_Feedback.aspx':
				if ($("#ctl00_ContentPlaceHolder1_btnCancel").length == 0) {
					//survey list
					var count = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr').length,
						target,
						i;

					for (i = 0; i < count + 1; i++) {
						if (i === count) {
							if (confirm('全部搞定啦！\n要帶你到成績頁面嗎？A__A')) {
								document.location.href = 'http://120.117.2.28/CourSel/Pages/PresentScore.aspx';
							}
							break;
						}
						target = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr:eq('+ i +') ').find(':submit');
						if (target.prop('disabled')) {
							continue;
						}else{
							target.click();
							break;
						}
					}
				}else{
					//in survey
					$(':radio[value=5]').prop('checked',true);
					if ($(':checkbox').length > 0) {
						$(':checkbox').prop('checked',true);
					}
					$(':submit').click();
				}
				break;
		}
		break;
}