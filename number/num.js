var showresult;
var num=1; //몇번째 결과값인지 확인하기 위한 변수

function send(data) {// 버튼을 누르면 데이터를 id ouput에 표시함
  output.value = output.value + data;
}

function outputclear(){// output의 데이터를 지움.
  output.value="";
}

function allclear(){// output input의 데이터를 지움.
  input.value="";
  output.value="";
}

function square(){// 제곱
  showresult = Math.pow(output.value,2);
  // eval() 문자열을 코드로 인식하게 해줌
  output.value=showresult;
}

function swap(){// output의 +-를 바꿔줌(반전)
  output.value=-output.value;
}

function tdelete(){// output의 데이터를 하나 지워줌.
  output.value = output.value.substring(0, output.value.length-1);
}

function sqrt() {// output의 데이터를 루트.
  output.value = Math.sqrt(output.value);
}

function sign(data){// output의 데이터를 부호를 붙여서 input에 넣어줌.
  input.value = input.value+output.value + data;
  output.value="";
}

function point(){// 1/x계산
  output.value="1/"+output.value;
  output.value=eval(output.value);
}


function result(){// 결과값 출력 & 계산식, 결과를 기록.
  input.value=input.value+output.value;
  showresult = eval(input.value);
  //eval() 문자열을 코드로 인식하게 해줌
  list.value+=num+"번째 계산식"+input.value+"\n";
  input.value="";
  output.value=showresult;
  list.value+=num+"번째 결과"+showresult+"\n";
  num++;
}