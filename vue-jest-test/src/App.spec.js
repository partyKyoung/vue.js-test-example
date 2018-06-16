import { mount } from "vue-test-utils";
import App from "./App.vue";

describe("App.vue", () => {
  const wrap = mount(App);

  it("mounted", () => {
    expect(wrap.find("h1").text()).toEqual("테스트"); // App
    expect(wrap.find("h3").text()).toEqual("테스트"); // Child
  });

  it("clicked", () => {
    const button = wrap.find(".click-btn");

    button.trigger("click");

    expect(wrap.find("h3").text()).toEqual("123"); // Child
  });
});
