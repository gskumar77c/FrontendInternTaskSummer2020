
// validation function to verify the phone number 
// I assumed that phone number(in India) will start with 7,8 or 9 and contain exactly 10 digits.
function validate(){
	var phno = document.getElementById('phno').value;
	//regex for phone number validation
	var reg = /^[7-9]\d{9}$/;
	if (reg.test(phno)){
		document.getElementById('phnoerror').style.visibility='hidden';
		return true;
	}
	else {
		document.getElementById('phnoerror').style.visibility='visible';
		document.getElementById('phnoerror').style.color = 'red';
		return false;
	}
}

