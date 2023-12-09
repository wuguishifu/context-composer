import React from 'react';

type ComposerProps = {
    components: Array<React.JSXElementConstructor<unknown & { children: React.ReactNode }>>;
    children: React.ReactNode;
}

export default ({ components, children }: ComposerProps) => <>
    {components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, children)}
</>;