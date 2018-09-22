import * as React from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown = props => (
  <div className="links-within">
    <ReactMarkdown escapeHtml={false} {...props} />
  </div>
)

export default Markdown
