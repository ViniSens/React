import React from 'react';
import Button from './Button'
import './TaskDetails.css'
import { useParams, useHistory } from 'react-router-dom';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () =>{
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, blanditiis ad! Voluptas veniam provident, ut id adipisci cupiditate placeat doloribus? Inventore excepturi suscipit nulla aliquid laudantium qui nostrum nobis incidunt?
                </p>
            </div>
        </>
      );
}
 
export default TaskDetails;