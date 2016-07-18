export default function h1(parser, node) {
  const defaultStyles = {
    color: 'black',
    font_weight: 'bold',
    font_size: '.67em'
  }

  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  return parser(children[0], defaultStyles);
}