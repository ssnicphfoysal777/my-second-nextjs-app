import React from 'react';
import Counter from '../components/counter';


const DashboardPage = () => {

    console.log('DashboardPage randered')
    return (
        <div>
            <h2>Dashboard page</h2>

            <Counter/>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;