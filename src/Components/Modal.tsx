import * as React from 'react'
import { Modal, Button, Icon } from 'antd';

interface ModalProps {
    visible: boolean,
    handleCancel: any,
    item:any
}

export const ModalView= (props:ModalProps) => {
    const { visible, handleCancel, item } = props
    const deleteItem = (item:any) => {
        console.log('delete')
    }
        return (
            <div>
                <Modal                    
                    width="380px"
                    title="Suppression"
                    okText="Oui"
                    cancelText="Non"
                    okType="danger"
                    visible={visible}
                    onCancel={handleCancel}
                    onOk={deleteItem}
                >
                    <p><Icon style={{ fontSize: 20, color:'black' }} type="question" />&nbsp;
                    Voulez-vous vraiment supprimer cette diligence ?</p>
                </Modal>
            </div>
        );
    }