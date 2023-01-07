import React from 'react';
let date = new Date();
const hour = date.getHours();

export default function Content(props) {
  return (
    <div className={props.mode}>
      <div className="gets--home">
        <div className="content--background"></div>
        <img
          src="./icons/gets5.png"
          alt="background"
          className="gets--back"
        ></img>
        <div className="devider"></div>
        <div className="right--align">
          <div className="gets--content">
            <img
              src="./icons/logo.png"
              alt="logo"
              width="300px"
              className="logo"
            ></img>
            <p className="gets--p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodis
              nihil expedita voluptate in perferendis culpa{' '}
            </p>
            <div className="gets--buttons">
              <a href="#">
                <button className="button--gs">GET STARTED</button>
              </a>
            </div>
            <div className="gets--buttons">
              <a href="#">
                <button className="button--si">LOG IN</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
