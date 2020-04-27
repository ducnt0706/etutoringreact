import React,{ Component,createContext} from 'react';
import { fireauth} from '../firebaseconfig';

export const UserContext=createContext({user:null});

class Userprovider extends Component {

    state = {user:null,loading:true};
    
      authListener = () => {
        fireauth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({user,loading:false});
        } else {
            this.setState({user:null});
          }
        });
      }
    
      componentDidMount = () => {
        this.authListener();
      }


    render() {
        const {children}=this.props;
        return (
            <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
        );
    }
}

export default Userprovider;