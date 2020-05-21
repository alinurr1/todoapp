import React from 'react';

export default function Carousel(){
    return(
        <div className="row">
            <div className="col text-center">
                <div class="card" style={{width: "18rem"}}>
                    <br></br>
                    <img src={require("../Logos/github.png")} class="card-img-top" alt="Github logo"></img>
                    <br></br>
                    <div class="card-body">
                        <a href="https://github.com/alinurr1" class="btn btn-primary ">Github Account</a>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <div class="card" style={{width: "18rem"}}>
                    <br></br>
                    <img src={require("../Logos/linkedin.png")} class="card-img-top" alt="Github logo"></img>
                    <br></br>
                    <div class="card-body">
                        <a href="https://www.linkedin.com/in/alinurr1/" class="btn btn-primary ">Linkedin Account</a>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <div class="card" style={{width: "18rem"}}>
                    <br></br>
                    <img src={require("../Logos/telegram.png")} class="card-img-top" alt="Github logo"></img>
                    <br></br>
                    <div class="card-body">
                        <a href="https://t.me/seichasss" class="btn btn-primary ">Telegram Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}