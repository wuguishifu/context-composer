import { useHello } from "./context/HelloProvider";
import { useWorld } from "./context/WorldProvider";

export default function App() {
    const { run: runHello } = useHello();
    const { run: runWorld } = useWorld();

    return (
        <main>
            <button onClick={runHello}>hello</button>
            <button onClick={runWorld}>world</button>
        </main>
    );
};