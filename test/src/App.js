import React, { useState } from 'react';
import './styles.css';

export function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [median, setMedian] = useState([]);
  const [primeNumbers, setPrimeNumbers] = useState([]);

  async function calculateMedian() {
    const response = await fetch(`/medianPrime?n=${inputNumber}`);
    const { median, prime } = await response.json();
    setMedian(median);
    setPrimeNumbers(prime);
  }

  function clearInput() {
    setInputNumber('');
    setMedian([]);
    setPrimeNumbers([]);
  }

  return (
    <>
      <div className="container">
        <h2> Median Calculator</h2>
        <input type="text" className="input" placeholder="Input number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
        <button className="button" onClick={calculateMedian}> Calculate Median</button>
        <button className="button" onClick={clearInput}>Clear </button>
        <div className="result">The prime numbers are : {primeNumbers.map((number) => `${number} `)}</div>
        <div className="result"> Median is : {median.map((number) => `${number} `)} </div>
      </div>
    </>
  );
}
