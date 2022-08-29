import { Button, Modal, Input } from 'antd';
import { useState } from 'react';
const TodoApp = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>Thêm</Button>
            <Modal title="ADD" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>
                    <Input placeholder="Name" />
                </p>
                <p> <Input placeholder="Age" /></p>

            </Modal>
        </div>
    )
}
export default TodoApp;