import { useState } from 'react';

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
    const [customName, setCustomName] = useState('');
    const [ukus, setUkus] = useState('us');
    const [showStory, setShowStory] = useState(false);
    const [story, setStory] = useState('');
    const [xItem, setXItems] = useState('');
    const [yItem, setYItems] = useState('');
    const [zItem, setZItems] = useState('');

    function handleClickGenerateRandomStory(event) {
        event.preventDefault();
        const xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
        const yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
        const zItems = ['spontaneously', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

        setXItems(randomValueFromArray(xItems));
        setYItems(randomValueFromArray(yItems));
        setZItems(randomValueFromArray(zItems));

        const name = customName || 'Bob';
        setShowStory(true);
    }

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input
                    type="text"
                    placeholder=""
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="us">US</label>
                <input type="radio" value="us" checked={ukus === "us"} />
                <label htmlFor="uk">UK</label>
                <input type="radio" value="uk" checked={ukus === "uk"} />
            </div>
            <div>
                <button onClick={handleClickGenerateRandomStory}> Generate random story</button>
            </div>
            {showStory && (
                <p>
                    It was 94 fahrenheit outside, so {xItem} went for a walk. When they
                    got to {yItem}, they stared in horror for a few moments, then {zItem}.
                    Bob saw the whole thing, but was not surprised — {xItem} weighs 300
                    pounds, and it was a hot day.
                </p>
            )}
        </>
    );
}