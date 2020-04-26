import React,{ Component,createContext} from 'react';
import { fireauth} from '../firebaseconfig';

export const UserContext=createContext({user:null});

class Userprovider extends Component {

    state = {user: {}};
    
      authListener = () => {
        fireauth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({user});
            //console.log(user.displayName);
        } else {
            this.setState({user:null});
            //console.log(user);
          }
        });
      }
    
      componentDidMount = () => {
        this.authListener();
      }


    render() {
        const {user}=this.state;
        const {children}=this.props;
        return (
            <UserContext.Provider value={user}>{children}</UserContext.Provider>
        );
    }
}

export default Userprovider;