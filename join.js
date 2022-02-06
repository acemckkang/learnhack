<script type="text/javascript">

function checkall(){ //데이터유효성체크
	let id = document.fr.id.value
	let pw = document.fr.pw.value
	let repw = document.fr.repw.value
	let name = document.fr.name.value
	let idnum1 = document.fr.idnum1.value
	let idnum2 = document.fr.idnum2.value
	let womyn = document.fr.gender[0]
	let men = document.fr.gender[1]

	if(id == ""){
		alert("아이디를 입력하세요")
		document.fr.id.focus();
		return false;
	}

	if(pw == ""){
		alert("비밀번호를 입력하세요")
		document.fr.pw.focus();
		return false;
	}

	if(pw != repw){
		alert("비밀번호가 일치하지않습니다.")
		document.fr.repw.select();
		return false;
	}

	if(name == ""){
		alert("이름을 입력하세요.")
		document.fr.name.select();
		return false;
	}

	if(idnum1 == ""){
		alert("주민번호를 입력하세요.")
		document.fr.idnum1.focus();
		return false;
	}

	if(idnum2 == ""){
		alert("주민번호를 입력하세요.")
		document.fr.idnum2.focus();
		return false;
	}

	if(womyn.checked == false && men.checked == false){
		if(idnum2.charAt(0) == 2 || idnum2.charAt(0) == 4){
		womyn.checked = true;
		return false;
		}

		if(idnum2.charAt(0) == 1 || idnum2.charAt(0) == 3){
		men.checked = true;
		return false;
		}
	}

	if(document.fr.hobby[0].checked == false 
			&& document.fr.hobby[1].checked == false
			&& document.fr.hobby[2].checked == false){
		alert("취미를 선택하세요");
		//document.fr.hobby[0].focus(); //사용자의 입력을 기다림
		document.fr.hobby[0].checked == true; //사용자입력안할시 자동으로 0번을 선택함
	}

	if(document.fr.sel.selectedIndex == 0){
		alert("과목을 선택하세요")
		document.fr.sel.focus();
		return false;
	}

	if(document.fr.txt.value == ""){
		alert("메모를 입력하세요");
		document.fr.txt.focus();
		return false;
	}

}
</script>
