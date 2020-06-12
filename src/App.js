import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Button } from 'antd'; //Ant Design for components

const Text = styled.p`
    color: ${(props) => (props.color.counter < 2 ? 'red' : 'blue')};
`; // template literals are ` ` which are beneficial. The p tag is replaced with Text at Counter tag.

const App = () => {
    const [state, setState] = useState({ counter: 0 });
    
    return (
        <div>
            <Text color={state}>Counter: {state.counter}</Text>
            <Button onClick={ () => setState((prev) => ({ counter: prev.counter + 1 })) } > + </Button>
        </div>    
    );
    
}

export default hot(module)(App);