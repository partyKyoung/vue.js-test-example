var gulp = require("gulp");

/**
 * gulp.task로 gulp task 선언
 * 첫번째 인자 name: task의 이름 지정
 * deps: 현재 선언한 task를 실행하기 전에 먼저 실행되어야 하는 task들의 배열 => task 실행 전 먼저 실행되어야 하는 task들이 없을 시 생략 가능
 * func: 실제 수행되어야 할 task의 내용을 정의한 func
 */

gulp.task("hello", () => {
  return console.log("Hello World!");
});

gulp.task("default", ["hello"]);
