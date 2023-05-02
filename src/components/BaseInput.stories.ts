// BaseInput.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3'

import BaseInput from './BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: { name: 'string', required: false },
      defaultValue: 'First Name',
      description: 'Place holder for the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'First Name' },
      },
      control: {
        type: 'text',
      },
    },
    modelValue: String,
    type: String,
    size: String,
    error: Object,
  },
}

// 👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof BaseInput>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Text: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {

    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    // 👇 The args you need here will depend on your component
  },
}
export const Password: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {

    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'password',

    // 👇 The args you need here will depend on your component
  },
}
export const Large: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'large',

    // 👇 The args you need here will depend on your component
  },
}
export const Small: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'small',

    // 👇 The args you need here will depend on your component
  },
}
export const Medium: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'medium',

    // 👇 The args you need here will depend on your component
  },
}
export const Error: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'medium',
    error: {
      isAvailable: true,
      messages: [{ $message: 'Input Error' }],
      showMessage: false,
    },
    // 👇 The args you need here will depend on your component
  },
}
export const ErrorWithMessage: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'medium',
    name: 'firstname',
    error: {
      isAvailable: true,
      messages: [{ $message: 'Value Input Error', $uid: 'firstname', $property: 'firstname' }],
      showMessage: true,
    },
    // 👇 The args you need here will depend on your component
  },
}
export const FullProperty: Story = {
  render: args => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Firstname',
    modelValue: 'Oluwatoyin',
    type: 'text',
    size: 'medium',
    name: 'firstname',
    error: {
      isAvailable: false,
      messages: [{ $message: 'Value Input Error', $uid: 'firstname', $property: 'firstname' }],
      showMessage: false,
    },
    // 👇 The args you need here will depend on your component
  },
}
