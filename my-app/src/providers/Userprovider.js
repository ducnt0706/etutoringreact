import React,{ Component,createContext} from 'react';
import { fireauth} from '../firebaseconfig';

export const UserContext=createContext();

class Userprovider extends Component {

    state = {user:{}};
    
      authListener = () => {
        fireauth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({user});
        } else {
            this.setState({user:null});
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