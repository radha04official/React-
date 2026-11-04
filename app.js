// code using react library,
const element = React.createElement('h1',{id:"first",className:"Radha",style:{backgroundColor: "blue", fontSize: "30px"}},"Hello Coders");
const element2 = React.createElement('h2',{id:"first",className:"Radha",style:{backgroundColor: "pink", fontSize: "30px"}},"Mazza aya");

// const root = document.getElementById('root');
// ReactDOM.render(element,root); this line gives warning as React18 onwardss it's not in use, alternative given below 
const div1 = React.createElement('div',{},[element,element2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// root.render(element2);  // this overwrites h1 tag. & also the h3 tag and p we wrote in div manually would not display

// render removes all the child elements of that div.
// sol: create a div and place all things to print in it, then this div goes as render element in root.
root.render(div1); //now both h1 & h2 gets printed.

{/* <div>
    <div>
        <ul>
            <li>
                
            </li>
        </ul>
    </div>
</div>  */} //if i want to write like this, it's so tough by above method, where i create 1 div then write all children in it.

// JSX is used to write code like HTML in js


