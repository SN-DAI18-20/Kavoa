import * as React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Kavoa Main View', module)
    .add('text', () => <p>Bonsoir</p>)

storiesOf('Component', module)
    .add('the text', () => <p>The text</p>)