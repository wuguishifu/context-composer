import React from 'react';
export default ({ components, children }) => React.createElement(React.Fragment, null, components.reduceRight((acc, Comp) => React.createElement(Comp, null, acc), children));
