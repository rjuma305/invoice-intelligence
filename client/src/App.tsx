import React from 'react';
import InvoiceUploader from './components/InvoiceUploader';
import InsightsDashboard from './components/InsightsDashboard';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Invoice Intelligence</h1>
            <InvoiceUploader />
            <InsightsDashboard />
        </div>
    );
};

export default App;
