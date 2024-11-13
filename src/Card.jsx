import './App.css'


export default function Card({title, text, btn, children}){
    return <div className="card" >
        {children}
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">{btn}</button>
        </div>
    </div>
}