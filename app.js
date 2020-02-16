const desc = "I just learned how to create a React Node!"
const myTitleID = 'main-title';
const name = 'Murray'

const header = (
    <header>
    {/* This is a comment */}
        <h1 id={ myTitleID }>{ name }'s First React Element</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);
ReactDOM.render(
    header,
    document.getElementById('root')
);