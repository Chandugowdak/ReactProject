import React, { useState } from 'react';

const FormComponent = () => {
    const [username, setUsername] = useState('');

    return (
        <div>
            <h1>Use Of htmlFor in react</h1>
            {/* In summary, htmlFor is used in React to follow JavaScript conventions, avoid conflicts with reserved keywords, and provide better accessibility and user experience by linking labels with their corresponding form controls. */}
            {/* htmlFor IS USED IN REACT WHEN WE CLICKON THE LABEL IT HAS TO HEIGLATE THE AREA IT HAS TO PERFORM THE TASK */}
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            
        </div>
    );
};

export default FormComponent;
