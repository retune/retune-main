import * as React from 'react'

class Group extends React.Component {
  state = { currentlyOpen: undefined }

  render() {
    return this.props.children({
      onToggle: (id, isCollapsed) => {
        if (!isCollapsed) {
          this.setState({ currentlyOpen: id })
        }
      },
      currentlyOpen: this.state.currentlyOpen,
    })
  }
}

export default Group
