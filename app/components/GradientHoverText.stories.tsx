import type { ComponentStory, ComponentMeta } from "@storybook/react";

import GradientHoverText from "~/components/GradientHoverText";

export default {
  title: "GradientHoverText",
  component: GradientHoverText,
} as ComponentMeta<typeof GradientHoverText>;

const Template: ComponentStory<typeof GradientHoverText> = (args) => (
  <GradientHoverText {...args} />
);

export const Primary = Template.bind({});
