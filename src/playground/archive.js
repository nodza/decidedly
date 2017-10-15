const app = {
  title: 'Decider',
  subtitle: 'Submit to the decision overlord.',
 options: []
};

const submitForm = (e) => {
  e.preventDefault();
  
 const option = e.target.elements.option.value;

 if(option) {
   app.options.push(option);
   e.target.elements.option.value = '';
   render();
 }
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const removeAll = () => {
 app.options = [];
 render();
};

const appRoot = document.getElementById('app');

const render = () => {
 const template = (
   <div>
     <h2>{app.title}</h2>
     <h4>{app.subtitle}</h4>
     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
     <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
     <button onClick={removeAll}>Remove All</button>
     <ol>
     {app.options.map((option) => {
       return <li key={option} >{option}</li>;
     })}
     </ol>
     <form onSubmit={submitForm}>
       <input type="text" name="option" />
       <button id="add">Add Option</button>
     </form>
   </div>
 );
 ReactDOM.render(template, appRoot);
};


render();
