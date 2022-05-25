import React from 'react';
import styled from 'styled-components';

import { Input } from '../Input';

interface ClassTestState {
  value: string;
}

export class ClassTest extends React.Component<any, ClassTestState> {
  constructor(props: ClassTestState) {
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
