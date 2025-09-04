import React, { useState } from "react";
import "@geotab/zenith/dist/index.css";
import { Button, Card, Cards, Header, Layout } from "@geotab/zenith";

// Simple Counter Component
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem'
        }}>
            <h2>Zenith UI Counter</h2>
            <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Count: {count}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button 
                    type="primary" 
                    onClick={() => setCount(c => c + 1)}
                >
                    Increment
                </Button>
                <Button 
                    type="secondary" 
                    onClick={() => setCount(0)}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Layout>
            <Header>
                <Header.Title pageName="Zenith UI Demo" />
            </Header>
            <Cards>
                <Card size="L" title="Counter Example" status="info">
                    <Card.Content>
                        <Counter />
                    </Card.Content>
                </Card>
            </Cards>
        </Layout>
    );
};

export default App;
