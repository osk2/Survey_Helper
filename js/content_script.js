switch (window.location.hostname) {
	case 'identity.stust.edu.tw':
		//login first
		swal({
			title: '噢！',
			text: '( ﾟ∀ﾟ)o彡ﾟ先登入才能幫你寫問卷哦',
			confirmButtonText: '好啦',
			confirmButtonColor: '#446CB3',
			type: 'info'
		});
		break;

	case 'eportal.stust.edu.tw':
		switch (window.location.pathname.replace(/^.*\/([^/]*)/, "$1")) {
			case 'MainPage.aspx':
				document.location.href = 'Stud_Feedback.aspx';
				break;

			case 'MenuTop.aspx':
				document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx';
				break;

			case 'Stud_FeedBack.aspx':
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
				
				break;
		}
		break;

	default:
		document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx';
		break;
}