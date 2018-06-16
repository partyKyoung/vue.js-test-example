import Vue from "vue";
import App from "./App.vue";

describe("test", () => {
  const Constructor = Vue.extend(App);
  const component = new Constructor().$mount();

  it("event test", () => {
    const button = component.$el.querySelectorAll("button")[0];
    const spy = jasmine.createSpy("onChange"); // 스파이 함수 생성

    component.$on("changeText", spy); // 뷰모델의 search 이벤트와 spy 함수 바인딩

    button.click(); // 버튼 클릭

    // 뷰 라이프사이클에 의해 다음 코드 실행 시점에 클릭한 결과가 반영된다.
    component.$nextTick(() => {
      const expectedObj = { message: "123" };

      // 스파이 함수가 실행되었고 검색어 데이터가 전달되었는지 검증한다.
      expect(spy).toHaveBeenCalledWith(expectedObj);
      done();
    });
  });
});
