import type { ComponentStory, ComponentMeta } from "@storybook/react";

import SliderMenu from "./SliderMenu";

export default {
  title: "SliderMenu",
  component: SliderMenu,
} as ComponentMeta<typeof SliderMenu>;

const Template: ComponentStory<typeof SliderMenu> = () => (
  <div
    style={{
      height: "120vh",
      width: "100%",
      border: "2px solid #83699f",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <SliderMenu />
  </div>
);

export const sliderMenu = Template.bind({});
