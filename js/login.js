function login() {
    const form = document.loginform;
    const chkEmail = checkValidEmail(form);
    const chkPw = checkValidPassword(form);
    const chkPw2 = checkValidPassword2(form);


    if (chkEmail) {
        document.getElementById('alert_email').innerText = "";
        form.email.style.border = '2px solid #EC7022';
    } else {
        form.email.style.border = '2px solid #0E4C9E';
        document.getElementById('alert_email').style.color = '#0E4C9E';
    }

    if (chkPw) {
        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid #EC7022';
    } else {
        form.password.style.border = '2px solid #0E4C9E';
        document.getElementById('alert_password').style.color = '#0E4C9E';
    }
    if (chkPw2) {
        document.getElementById('alert_password2').innerText = "";
        form.password2.style.border = '2px solid #0E4C9E';
    } else {
        form.password2.style.border = '2px solid #0E4C9E';
        document.getElementById('alert_password2').style.color = '#0E4C9E';
    }

    if ( chkEmail && chkPw && chkPw2) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}


function checkValidEmail(form) {
    if (form.email.value == "") {
        document.getElementById('alert_email').innerText = "이메일을 입력하세요.";
        //form.email.focus();
        return false;
    }

    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // "ㅁ@ㅁ.ㅁ" 이메일 형식 검사.
    if (exptext.test(form.email.value) === false) {
        document.getElementById('alert_email').innerText = "이메일이 유효하지 않습니다.";
        //form.email.select();
        return false;
    }

    return true;
}

function checkValidPassword(form) {
    if (form.password.value == "") {
        document.getElementById('alert_password').innerText = "비밀번호를 입력하세요.";
        //form.password.focus();
        return false;
    }

    const pw = form.password.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "최소 6자리 입력하세요.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "공백없이 입력하세요.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "비밀번호가 유효하지 않습니다.";
        return false;
    }

    return true;
}

// function checkValidPassword2(form) {
//     if (form.password2.value == "") {
//         document.getElementById('alert_password2').innerText = "다시한번 비밀번호를 입력하세요.";
//         //form.password.focus();
//         return false;
//     }

//     if (form.password.value !== form.password2.value) {
//         document.getElementById('alert_password2').innerText = "비밀번호가 일치하지 않습니다.";
//         form.password.style.border = '2px solid #0E4C9E';
//         document.getElementById('alert_password').style.color = '#0E4C9E';
//         return false;
//     }

//     return true;
// }