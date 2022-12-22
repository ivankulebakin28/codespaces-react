import React, { Component } from 'react'
import styled from 'styled-components'

const GridTemplate = {
    'grid-template-columns': 'repeat(3, 1fr)',
    'gap': "10px",
    'grid-auto-rows': 'minmax(100px, auto)'
}

const mapGridColumn = (props) => {
    if(props.column) {
        return {
            'grid-column': props.column
        }
    }
}

class GridArea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.propsToStyle = this.propsToStyle.bind(this);
        this.propsToStyle()
    }

    propsToStyle() {
        let styles = {
            ...mapGridColumn(this.props)
        }
        this.setState(styles)
    }

    render() {
        const Wrapper = styled.div(this.state.styles);
        return (
            <Wrapper>
                _{this.props.children}
            </Wrapper> 
        ) 
    }
}


class Grid extends Component {
    render() {
        const GridWrapper = styled.div({
            display: 'grid',
            ...this.props.template
        });

        const ItemWrapper = styled.div({
            display: 'grid',
        });


        return (
            <GridWrapper>
                {
                    this.props.children

                }
            </GridWrapper>
        )
    }
}

export {
    GridTemplate,
    GridArea
};

export default Grid;