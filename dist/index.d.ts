import React from 'react';
type ComposerProps = {
    components: Array<React.JSXElementConstructor<unknown & {
        children: React.ReactNode;
    }>>;
    children: React.ReactNode;
};
declare const _default: ({ components, children }: ComposerProps) => React.JSX.Element;
export default _default;
