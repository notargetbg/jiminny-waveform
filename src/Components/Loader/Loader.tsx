import React from 'react';

type Props = {
    color: string
}

class Loader extends React.Component<Props> {
    render() {
        return (
            <div style={{color: this.props.color}} className="loader" />
        )
    }
}

export default Loader;