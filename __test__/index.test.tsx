import React from 'react';
import renderer from 'react-test-renderer';
import Composer from '../lib';
import { describe, it, expect } from '@jest/globals';

describe('Composer', () => {
    it('should render a div', () => {
        const component = renderer.create(
            <Composer components={[]}>
                <div id='child' />
            </Composer>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with providers', () => {
        const component = renderer.create(
            <Composer components={[TestProvider0, TestProvider1]}>
                <div id='child' />
            </Composer>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

function TestProvider0({ children }: { children: React.ReactNode }) {
    return <div id='p0'>{children}</div>;
}

function TestProvider1({ children }: { children: React.ReactNode }) {
    return <div id='p1'>{children}</div>;
}