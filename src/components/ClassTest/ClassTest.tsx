import React from 'react';

import styles from './ClassTest.module.css';

interface ClassTestState {
  value: string;
}

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
        <input
          type="text"
          className={styles['input']}
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
