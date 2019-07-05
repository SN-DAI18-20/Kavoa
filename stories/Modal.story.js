import * as React from 'react'
import {ModalView} from '../src/Components/Modal'

import {Button} from 'antd'

export const ModalStory = (props) => {
    const [visible, setVisible] = React.useState(false)
    const showModal = () => {
        setVisible(true)
    };

    const handleOk = (e: any) => {
        console.log("super chose")
        setVisible(false)
    };

    const handleCancel = (e: any) => {
        setVisible(false)
    };

    return <>
        <ModalView deleting={() => handleOk()} handleCancel={() => handleCancel()} visible={visible} />
        <Button onClick={() => showModal()} > Modal</Button>
    </>
}