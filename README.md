# @wuguishifu/context-composer

This package allows you to add provider trees in a more streamlined manner.

## Installation

npm:

```none
npm install @wuguishifu/context-composer
```

## Usage

To use this package, just replace your current provider tree with a `<Composer/>` component. Here's an example:

### Before

```jsx
...
export default function App() {
    return (
        <SocketProvider>
            <SafeAreaProvider>
                <StorageProvider>
                    <AlertProvider>
                        <ToasterProvider>
                            <ApiProvider>
                                <div>hello world</div>
                            </ApiProvider>
                        </ToasterProvider>
                    </AlertProvider>
                </StorageProvider>
            </SafeAreaProvider>
        </SocketProvider>
    );
};
```

### After

```jsx
...
import Composer from '@wuguishifu/context-composer';

export default function App() {
    return (
        <Composer components={[
            SocketProvider,
            SafeAreaProvider,
            StorageProvider,
            AlertProvider,
            ToasterProvider,
            ApiProvider
        ]}>
            <div>hello world</div>
        </Composer>
    );
};
```

## Credit

Built by Bo Bramer. Copyright 2023 Bo Bramer (<bbramer@uci.edu>)
