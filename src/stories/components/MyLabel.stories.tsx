import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor:{control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args: any) => <MyLabel {...args}/>


export const Basic = Template.bind({});

Basic.args= {
    size: "normal",
    allCaps: false //true capitalizar toda l palabra
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color : 'secondary' //primary / secondary/ tertuary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    color : 'tertiary'
}

export const CustonFontColor = Template.bind({});
CustonFontColor.args = {
    size: " h1",
    color : 'tertiary',
    fontColor: '#5517ac'
    
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: " h1",    
    fontColor: 'white',
    backgroundColor: 'black'
    
}