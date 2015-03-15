//ver 1.2.2

var getParameter = function(sParam) {

	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

switch (window.location.hostname) {
	case 'identity.stust.edu.tw':
		//login first
		break;

	case 'eportal.stust.edu.tw':
		switch (window.location.pathname.replace(/^.*\/([^/]*)/, "$1")) {
			case 'MainPage.aspx':
				document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx?auto_survey=1';
				break;

			case 'MenuTop.aspx':
				document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx?auto_survey=1';
				break;

			case 'Stud_FeedBack.aspx':

				if (getParameter('auto_survey') !== '1') {
					break;
				}

				if ($("#ctl00_ContentPlaceHolder1_btnCancel").length === 0) {
					//survey list
					var count = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr').length,
						target,
						i;

					for (i = 0; i <= count; ++i) {
						if (i === count) {
							swal({
								title: '全部搞定啦！',
								text: '要帶你到成績查詢頁面嗎？ლ(・´ｪ`・ლ)',
								showCancelButton: true,
								confirmButtonText: '走吧',
								confirmButtonColor: '#446CB3',
								cancelButtonText: '不了…',
								cancelButtonColor: '#2C3E50',
								type: 'success'
							},
							function() {
								document.location.href = 'http://120.117.2.132/CourSel/Pages/PresentScore.aspx';
							});
							break;
						}
						target = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr:eq('+ i +')').find(':submit');
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

			default:
				// the script only run when url match as specified in manifest, shouldn't have any exception here.
				break;
		}
		break;

	default:
		// the script only run when url match as specified in manifest, shouldn't have any exception here.
		break;
}