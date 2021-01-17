import React, { useState } from 'react';
import Questions from './Questions';
import data from './data';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Questions key={question.id} {...question}></Questions>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
