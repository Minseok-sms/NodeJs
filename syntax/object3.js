
//o라는 객체안에 함수들이 그룹핑되어있음

var o = {
  v1:'v1',
  v2:'v2',
  f1:function(){
    console.log(this.v1);
  },
  f2:function(){
    console.log(this.v2);
  }
}

o.f1();
o.f2();
