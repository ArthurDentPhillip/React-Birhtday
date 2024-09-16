import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import Spinner from 'react-bootstrap/Spinner';
const people = [
    {
      id: '1',
      name: 'Bertie Yates',
      age: '29 years',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: '2',
      name: 'Hester Hogan',
      age: '32 years',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: '3',
      name: 'Larry Little',
      age: '36 years',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: '4',
      name: 'Sean Walsh',
      age: '34 years',
      img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
    {
        id: '5',
        name: 'Lola Gardner',
        age: '29 years',
        img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
  ];


function Block(props){
    const id = props.id;
    const [age, setAge] = useState(props.age);
    const [name, setName] = useState(props.name);
    const [img, setImg] = useState(props.img);
    const handleButtonClick = () => {
      setAge(null);
      setName(null);
      setImg(null);
    };
return(
  <div>
      {age ? (
    <div className='container'>
        <div className="row blockMain">
            <div className="col-12 row">
              <div class="col-3">
                <img src={img} alt="name"/>
              </div>
              <div class="col-9">
                <h3>{name}</h3>
                <p class="ageStyle">{age}</p>
                <button class="btnDel2" onClick={handleButtonClick}>Del</button>
              </div>
            </div>
        </div>
    </div>
  ) : (
    <div className="hideBlock">
      
    </div>
  )}
  </div>
  
);
}
function People(){
  const [pCopy, setCopy] = useState(people);
  const [result, setResult] = useState(true);
  // const clickBtn = () => {
  //   setCopy([]);
  //   setResult(false);
  // };
  const updateBtn = () => {
    window.location.reload();
  };
    return (
          <section className = "mainCenterBlock">
          <div className="container">
              <div className="row">
                  <div className="col-6 block">
                    <h1>Birthdays Today</h1>
                    <button onClick={updateBtn} className="update btnUpdate"><svg className = "updateOut" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg></button>
                      {pCopy.map((people) => {
                          const { name, age, img, id } = people;
                          return <Block img={img} name={name} age={age} id={id} />;
                      })}
                      {/* <button class="btnDel" onClick={clickBtn}>Clear all</button> */}
                  </div>
              </div>
          </div>
      </section>
    )
}
function App() {
  return <People></People>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);