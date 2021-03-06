const PrismicRichText = require('prismic-richtext')
const { Link } = require('prismic-helpers')
const escapeHtml = require('escape-html')

const Elements = PrismicRichText.Elements
const LinkHelper = Link

function serialize(linkResolver, type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return serializeStandardTag('# ', '', element, children)
    case Elements.heading2:
      return serializeStandardTag('## ', '', element, children)
    case Elements.heading3:
      return serializeStandardTag('### ', '', element, children)
    case Elements.heading4:
      return serializeStandardTag('#### ', '', element, children)
    case Elements.heading5:
      return serializeStandardTag('##### ', '', element, children)
    case Elements.heading6:
      return serializeStandardTag('###### ', '', element, children)
    case Elements.paragraph:
      return serializeStandardTag('', '\n\n', element, children)
    // case Elements.preformatted:
    //   return serializePreFormatted(element)
    case Elements.strong:
      return serializeStandardTag('**', '**', element, children)
    case Elements.em:
      return serializeStandardTag('*', '*', element, children)
    case Elements.listItem:
      return serializeStandardTag('* ', '\n', element, children)
    case Elements.oListItem:
      return serializeStandardTag('1. ', '\n', element, children)
    case Elements.list:
      return serializeStandardTag('', '\n', element, children)
    case Elements.oList:
      return serializeStandardTag('', '\n', element, children)
    case Elements.image:
      return serializeImage(linkResolver, element)
    case Elements.embed:
      return serializeEmbed(element)
    case Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children)
    case Elements.label:
      return serializeLabel(element, children)
    case Elements.span:
      return serializeSpan(content)
    default:
      return ''
  }
}

function label(element) {
  return element.label ? ` class="${element.label}"` : ''
}

function serializeStandardTag(start, end, element = {}, children = []) {
  // return `${start}${label(element)}>${children.join('')}${end}`
  return `${start}${children.join('')}${end}`
}

function serializePreFormatted(element) {
  return `<pre${label(element)}>${escapeHtml(element.text)}</pre>`
}

function serializeImage(linkResolver, element) {
  const linkUrl = element.linkTo
    ? LinkHelper.url(element.linkTo, linkResolver)
    : null
  const linkTarget =
    element.linkTo && element.linkTo.target
      ? `target="${element.linkTo.target}" rel="noopener"`
      : ''
  const wrapperClassList = [element.label || '', 'block-img']
  const img = `<img src="${element.url}" alt="${element.alt ||
    ''}" copyright="${element.copyright || ''}">`

  return `
    <p class="${wrapperClassList.join(' ')}">
      ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
    </p>
  `
}

function serializeEmbed(element) {
  return `
    <div data-oembed="${element.oembed.embed_url}"
      data-oembed-type="${element.oembed.type}"
      data-oembed-provider="${element.oembed.provider_name}"
      ${label(element)}>
          
      ${element.oembed.html}
    </div>
  `
}

function serializeHyperlink(linkResolver, element, children) {
  return `[${children.join('')}](${element.data.url})`

  // const target = element.data.target
  //   ? `target="${element.data.target}" rel="noopener"`
  //   : ''
  // return `<a ${target} href="${LinkHelper.url(
  //   element.data,
  //   linkResolver
  // )}">${children.join('')}</a>`
}

function serializeLabel(element, children) {
  // return `<span ${label(element.data)}>${children.join('')}</span>`
  return children.join('')
}

function serializeSpan(content) {
  return content
  // return content ? escapeHtml(content).replace(/\n/g, '<br />') : ''
}

module.exports = {
  asText(structuredText, joinString) {
    return PrismicRichText.asText(structuredText, joinString)
  },

  asMarkdown(items) {
    return items
      .map(({ type, text }) => {
        // linkResolver, type, element, content, children
        return serialize({}, type, {}, text, [text])
      })
      .join('')
  },

  markdownSerializer: serialize,

  Elements: Elements,
}
