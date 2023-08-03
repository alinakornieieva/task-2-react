import { Input } from "../components/Input/Input";

export default {
    title: 'Input',
    component: Input
}

const Template = (arg) => <Input {...arg} />

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Enter a text here',
}

export const Thick = Template.bind({})
Thick.args = {
    borderWidth: '5px',
}

export const Red = Template.bind({})
Red.args = {
    color: 'red',
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm'
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg'
}

export const Straight = Template.bind({})
Straight.args = {
    rounded: false
}