import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <div
    style={{
      height: "120vh",
      width: "100%",
      border: "2px solid #83699f",
      borderRadius: "5px",
    }}
  >
    <Header />
  </div>
);

export const Primary = Template.bind({});
