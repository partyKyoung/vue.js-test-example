import Vue from "vue";
import App from "./App.vue";
import { mount } from "avoriaz";
import { expect } from "chai";

describe("test", () => {
  const component = mount(App);

  it("event", () => {
    const button = component.find("button")[0];

    button.dispatch("click");

    // assert that component text contains items from the list
    expect(component.find("h3")[0].text()).to.equals("sibal");
  });
});
