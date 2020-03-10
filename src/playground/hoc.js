import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>THE INFO IS: {props.info}</p>
    </div>
)

const withAminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <div>
            <p>Authenticated</p>  
            <WrappedComponent {...props}/> 
            </div>
            : <p>You're not authenticated</p> }
       
        </div>
    )
}

const AdminInfo = withAminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById("app"))