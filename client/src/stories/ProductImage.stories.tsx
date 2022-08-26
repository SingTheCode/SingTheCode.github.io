import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProductImage from "../components/ProductImage";

export default {
  title: "Components/ProductImage",
  component: ProductImage,
  argTypes: {
    src: { control: "file", accept: ".png" },
  },
} as ComponentMeta<typeof ProductImage>;

const Template: ComponentStory<typeof ProductImage> = (args) => (
  <ProductImage {...args} />
);

export const Basic = Template.bind({});
