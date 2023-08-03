import { Button } from "../components/Button/Button";

export default {
    title: 'Button',
    component: Button
}

const Template = (arg) => <Button {...arg} />

export const Default = Template.bind({})
Default.args = {
    text: 'Press me',
}

export const Red = Template.bind({})
Red.args = {
    text: 'Press red',
    backgroundColor: 'red',
}

export const Yellow = Template.bind({})
Yellow.args = {
    text: 'Press yellow',
    backgroundColor: 'yellow',
    color: '#000',
}

export const Small = Template.bind({})
Small.args = {
    text: 'Press me',
    size: 'sm'
}

export const Large = Template.bind({})
Large.args = {
    text: 'Press me',
    size: 'lg'
}

export const Straight = Template.bind({})
Straight.args = {
    text: "Straight Button",
    rounded: false
}
