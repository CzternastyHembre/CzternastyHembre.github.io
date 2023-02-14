import * as React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { TaskList } from './TaskList';

const Container = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 100%;
    margin-top: 2rem;
`;

const Home: React.FC = () => {
    const [tp, setTp] = React.useState<number>(0);
    console.log(tp)

    return (
        <Container>
            <Header tp={tp} />
            <TaskList setTp={setTp} />
        </Container>
    );
};

export { Home };
