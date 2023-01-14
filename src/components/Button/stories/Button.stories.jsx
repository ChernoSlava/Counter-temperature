import React from "react";
import { Button } from "..";

export default {
    title: 'Example/Button',
    component: Button,
    atgTypes: { onClick: { action: 'clicked' }},
}

const Template = args => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    title: '+',
    type: 'plus'
}

Playground.argTypes = {
    type: {
        control: { type: 'select', options: ['Plus', 'Minus']}
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