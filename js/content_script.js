var getParameter = function(param) {

    var pageURL = window.location.search.substring(1),
        URLVariables = pageURL.split('&');

    for (var i = 0; i < URLVariables.length; i++) {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] === param) {
            return parameterName[1];
        }
    }
};

switch (window.location.hostname) {
case 'identity.stust.edu.tw':
    // Follow redirect to login page
    break;

case 'eportal.stust.edu.tw':
    switch (window.location.pathname.replace(/^.*\/([^/]*)/, '$1')) {
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
            // In survey list
            var count = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr').length,
                target,
                i;

            for (i = 0; i <= count; ++i) {
                if (i === count) {
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
        }else{
            // In survey page
            $(':radio[value=5]').prop('checked',true);
            if ($(':checkbox').length > 0) {
                $(':checkbox').prop('checked',true);
            }
            $(':submit').click();
        }
        break;

    default:
        // This script only runs when url is matched as specified in manifest. It shouldn't have any exception here.
        break;
    }
    break;

default:
    // This script only runs when url is matched as specified in manifest. It shouldn't have any exception here.
    break;
}
