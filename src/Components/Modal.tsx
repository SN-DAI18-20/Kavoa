import * as React from 'react'
import { Modal, Button, Icon } from 'antd';
import { Delete } from '../utils/api';

interface ModalProps {
    visible: boolean,
    handleCancel: any,
    value:string
}

export const ModalView= (props:ModalProps) => {
    const { visible, handleCancel, value } = props
    const deleteItem = (key:string) => {
        console.log('delete')
        Delete('diligences/'+key).then(e => console.log(e))
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
                    onOk={() => deleteItem(value)}
                >
                    <p><Icon style={{ fontSize: 20, color:'black' }} type="question" />&nbsp;
                    Voulez-vous vraiment supprimer cette diligence ?</p>
                </Modal>
            </div>
        );
    }