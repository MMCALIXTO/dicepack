function create(tagAndClass, { style, listeners, attributes, ref, domProps } = {}, children) {
  // extract classlist from tag name
  const [tagName, ...classList] = tagAndClass.split('.');

  // create element by tagName
  const nodeElement =
    ['svg', 'path', 'g'].indexOf(tagName) > -1
      ? document.createElementNS('http://www.w3.org/2000/svg', tagName)
      : document.createElement(tagName);

  // add classes
  if (classList.length) {
    classList.forEach(className => nodeElement.classList.add(className));
  }

  // set attributes by key
  if (attributes) {
    for (const key in attributes) {
      var attr = attributes[key];
      if (attr) {
        nodeElement.setAttribute(key, attr);
      }
    }
  }

  // assign dom props
  if (domProps) {
    for (const key in domProps) {
      nodeElement[key] = domProps[key];
    }
  }

  // assign styles
  if (style) {
    for (const key in style) {
      nodeElement.style[key] = style[key];
    }
  }

  // bind listeners
  if (listeners) {
    for (const key in listeners) {
      nodeElement.addEventListener(key, listeners[key], false);
    }
  }

  // create childs
  if (children) {
    children.forEach(child =>
      child instanceof Element ? nodeElement.appendChild(child) : nodeElement.appendChild(create(...child))
    );
  }

  // bind rel
  if (ref) {
    ref(nodeElement);
  }

  return nodeElement;
}

function bindReference(target, key, link) {
  if (!link) {
    return bindReference.bind(this, target, key);
  }
  target[key] = link;
}

export { create, bindReference };
