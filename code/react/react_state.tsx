
import React, { useState } from 'react';

const Function = () => {
    const [user, setUser] = useState<User>({
        authentificated: false,
        data: {
            first: 'Todd',
            last: 'Doctor',
            id: 1,
        }
    })
    return (
        <div>
            <ChildFunction user={user} />
        </div>
    )
} 
