import React from 'react';
import styled from 'styled-components';

interface ClassTestState {
  value: string;
}

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #000;
`;

class ClassTest extends React.Component<any, ClassTestState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value:
        'Это - управляемый input, сделанный с помощью классового компонента!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <Input
          type="text"
          defaultValue={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default ClassTest;
