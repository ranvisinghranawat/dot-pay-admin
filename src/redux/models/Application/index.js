import store from '../../store';
import { setLoading } from './action';

const obj = {

    setLoading:(val, message)=>store.dispatch(setLoading(val, message)),
}

export default obj;
