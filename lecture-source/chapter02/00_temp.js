let obj = { result: 0 };

obj.add = function (x, y) {
  const inner = () => {
    // 화살표 함수 내 this : 상위 scope(obj 객체) this
    // this == obj
    this.result = x + y;
  };

  inner();
};
obj.add(33, 66);
console.log(obj);
