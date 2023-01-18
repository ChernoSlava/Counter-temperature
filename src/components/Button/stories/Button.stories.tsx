import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from "..";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    title: '+',
    type: 'plus'
}

Playground.argTypes = {
    type: {
        control: { type: 'select', options: ['plus', 'minus']}
    }
}

export const PlusBtn = Template.bind({});

PlusBtn.args = {
    title: "+",
    type: 'plus',
}

export const MinusBtn = Template.bind({});

MinusBtn.args = {
    title: "-",
    type: 'minus',
}