import * as React from 'react'

class Group extends React.Component {
  state = { currentlyOpen: undefined, initialRender: true }

  componentDidMount() {
    if (this.state.initialRender) {
      this.setState(() => ({ initialRender: false }))
    }
  }

  render() {
    return this.props.children({
      onToggle: (id, isCollapsed) => {
        if (!isCollapsed) {
          this.setState({ currentlyOpen: id })
        }
      },
      currentlyOpen: this.state.currentlyOpen,
      initialRender: this.state.initialRender,
    })
  }
}

export default Group
